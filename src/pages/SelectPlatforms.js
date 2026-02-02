import React, { useState, useRef } from 'react';
import { Share2 } from 'lucide-react';
import X from '../logos/twitter.png';
import IG from '../logos/instagram.png';
import Linked from '../logos/linkedin.png';
import YT from '../logos/youtube.png';

// Import components
import SearchBar from './components/SearchBar';
import TabFilter from './components/TabFilter';
import AllPlatformsView from './components/AllPlatformsView';
import SingleCategoryView from './components/SingleCategoryView';
import ExpandedPlatformDetails from './components/ExpandedPlatformDetails';
import BottomBar from './components/BottomBar';

// Import data
import { allPlatforms, tabs } from './data/platformsData';

function SelectPlatforms() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);
  const [expandedPlatform, setExpandedPlatform] = useState(null);
  const categoriesScrollRef = useRef(null);
  const expandedRef = useRef(null);

  // Initialize with all platforms selected
  const [selectedPlatforms, setSelectedPlatforms] = useState(() => {
    const allSelected = [];
    Object.entries(allPlatforms).forEach(([category, items]) => {
      items.forEach(item => {
        allSelected.push({ platformId: item.id, platformName: item.name, category });
      });
    });
    return allSelected;
  });

  // Initialize with all categories selected
  const [selectedCategories, setSelectedCategories] = useState({
    websites: true,
    tv: true,
    radio: true,
    billboards: true,
    influencers: true
  });

  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'twitter':
        return X;
      case 'instagram':
        return IG;
      case 'linkedin':
        return Linked;
      case 'youtube':
        return YT;
      default:
        return Share2;
    }
  };

  const toggleCategory = (category) => {
    const newSelectedCategories = {
      ...selectedCategories,
      [category]: !selectedCategories[category]
    };
    setSelectedCategories(newSelectedCategories);

    // Update selected platforms
    if (newSelectedCategories[category]) {
      // Select all platforms in this category
      const platformsToAdd = allPlatforms[category].map(item => ({
        platformId: item.id,
        platformName: item.name,
        category
      }));
      setSelectedPlatforms(prev => [...prev, ...platformsToAdd]);
    } else {
      // Deselect all platforms in this category
      setSelectedPlatforms(prev => prev.filter(p => p.category !== category));
    }
  };

  const getCategoryTotalCost = (category) => {
    // Get all selected platform IDs in this category
    const selectedInCategory = selectedPlatforms.filter(p => p.category === category);
    
    // Calculate total cost
    const total = allPlatforms[category]
      .filter(platform => selectedInCategory.some(p => p.platformId === platform.id))
      .reduce((sum, platform) => sum + (platform.priceValue || 0), 0);
    
    return total;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const togglePlatform = (platformId, platformName, category) => {
    const platformData = { platformId, platformName, category };
    setSelectedPlatforms(prev => {
      const exists = prev.find(p => p.platformId === platformId);
      if (exists) {
        const newSelected = prev.filter(p => p.platformId !== platformId);
        // Update category selection status
        const remainingInCategory = newSelected.filter(p => p.category === category);
        if (remainingInCategory.length === 0) {
          setSelectedCategories(prevCat => ({ ...prevCat, [category]: false }));
        }
        return newSelected;
      } else {
        const newSelected = [...prev, platformData];
        // Check if all platforms in category are now selected
        const allInCategory = allPlatforms[category].every(item =>
          newSelected.some(p => p.platformId === item.id)
        );
        if (allInCategory) {
          setSelectedCategories(prevCat => ({ ...prevCat, [category]: true }));
        }
        return newSelected;
      }
    });
  };

  const isPlatformSelected = (platformId) => {
    return selectedPlatforms.some(p => p.platformId === platformId);
  };

  const handlePlatformClick = (platform, category) => {
    if (expandedPlatform?.id === platform.id) {
      setExpandedPlatform(null);
    } else {
      setExpandedPlatform({ ...platform, category });
      // Scroll to expanded view after a brief delay
      setTimeout(() => {
        expandedRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 100);
    }
  };

  const getFilteredPlatforms = () => {
    let filtered;
    if (activeTab === 'all') {
      filtered = Object.entries(allPlatforms).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    } else {
      filtered = allPlatforms[activeTab]?.map(item => ({ ...item, category: activeTab })) || [];
    }

    if (searchQuery) {
      filtered = filtered.filter(platform =>
        platform?.name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const handleContinue = () => {
    if (selectedPlatforms.length === 0) {
      alert('Please select at least one platform');
      return;
    }
    
    console.log('Selected platforms:', selectedPlatforms);
  };

  const scrollCategories = (direction) => {
    const container = categoriesScrollRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    const container = categoriesScrollRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    const container = categoriesScrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      handleScroll();
      
      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, [activeTab]);

  const totalPlatformCount = Object.values(allPlatforms).flat().length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        {/* Header */}
        <div className="mb-8 sm:mb-12 space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
            Select your advertising platforms
          </h1>
          <p className="text-base sm:text-lg text-gray-600">
            All platforms are selected by default. Click to deselect or tap any platform to see details.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 sm:mb-10 space-y-4 sm:space-y-6">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <TabFilter tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Platforms Display */}
        {activeTab === 'all' ? (
          <AllPlatformsView
            allPlatforms={allPlatforms}
            searchQuery={searchQuery}
            selectedPlatforms={selectedPlatforms}
            selectedCategories={selectedCategories}
            expandedPlatform={expandedPlatform}
            showLeftButton={showLeftButton}
            showRightButton={showRightButton}
            categoriesScrollRef={categoriesScrollRef}
            scrollCategories={scrollCategories}
            toggleCategory={toggleCategory}
            togglePlatform={togglePlatform}
            handlePlatformClick={handlePlatformClick}
            isPlatformSelected={isPlatformSelected}
            getSocialIcon={getSocialIcon}
            getCategoryTotalCost={getCategoryTotalCost}
            formatCurrency={formatCurrency}
          />
        ) : (
          <SingleCategoryView
            filteredPlatforms={getFilteredPlatforms()}
            expandedPlatform={expandedPlatform}
            togglePlatform={togglePlatform}
            handlePlatformClick={handlePlatformClick}
            isPlatformSelected={isPlatformSelected}
            getSocialIcon={getSocialIcon}
          />
        )}

        {/* Expanded Platform Details */}
        <ExpandedPlatformDetails
          expandedPlatform={expandedPlatform}
          expandedRef={expandedRef}
          isPlatformSelected={isPlatformSelected}
          togglePlatform={togglePlatform}
          setExpandedPlatform={setExpandedPlatform}
          getSocialIcon={getSocialIcon}
        />

        {/* Fixed Bottom Bar */}
        <BottomBar
          selectedCount={selectedPlatforms.length}
          totalCount={totalPlatformCount}
          handleContinue={handleContinue}
        />
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default SelectPlatforms;