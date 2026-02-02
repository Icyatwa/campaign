// Example: Updated Rate Cards Data Structure for Each Media Type

import { Globe, Tv, Radio, MapPin, Users } from 'lucide-react';

export const allPlatforms = {
    // ==========================================
    // WEBSITES: Type, Description, Quantity, Price
    // ==========================================
    websites: [
        { 
            id: 'igihe', 
            name: 'Igihe', 
            icon: Globe, 
            iconUrl: "path/to/igihe-icon.png",
            description: "Rwanda's leading news and information website",
            price: "$500/week",
            priceValue: 500,
            reach: "2M+ monthly visitors",
            format: "Banner ads, sponsored content",
            rateCards: [
                {
                    title: "Homepage Banner",
                    type: "Leaderboard Banner (728x90)",
                    description: "Premium placement at the top of the homepage with maximum visibility for all visitors",
                    quantity: "7 days",
                    price: "$500",
                    imageUrl: "path/to/igihe-homepage-banner.png",
                    additionalInfo: "Includes click-through tracking"
                },
                {
                    title: "Sidebar Display Ad",
                    type: "Medium Rectangle (300x250)",
                    description: "Sticky sidebar advertisement that follows users as they scroll through articles",
                    quantity: "14 days",
                    price: "$800",
                    imageUrl: "path/to/igihe-sidebar-ad.png",
                    additionalInfo: "Best for product launches"
                },
                {
                    title: "Sponsored Article",
                    type: "Native Content",
                    description: "Full editorial-style article written by our content team featuring your brand story",
                    quantity: "Permanent (stays on site)",
                    price: "$1,200",
                    imageUrl: "path/to/igihe-sponsored-article.png",
                    additionalInfo: "Includes social media promotion"
                }
            ]
        },
        { 
            id: 'newtimes', 
            name: 'The New Times', 
            icon: Globe,
            iconUrl: "path/to/newtimes-icon.png", 
            description: "Rwanda's premier English language daily newspaper online",
            price: "$400/week",
            priceValue: 400,
            reach: "1.5M+ monthly visitors",
            format: "Display ads, native advertising",
            rateCards: [
                {
                    title: "Breaking News Banner",
                    type: "Full Width Banner (970x90)",
                    description: "High-impact banner appearing on breaking news pages and homepage",
                    quantity: "5 days",
                    price: "$400",
                    imageUrl: "path/to/newtimes-breaking-banner.png"
                },
                {
                    title: "Category Sponsorship",
                    type: "Business Section Takeover",
                    description: "Exclusive branding on all business section pages including logo and banner placement",
                    quantity: "30 days",
                    price: "$2,500",
                    imageUrl: "path/to/newtimes-category-sponsor.png",
                    additionalInfo: "Includes newsletter mention"
                }
            ]
        },
    ],

    // ==========================================
    // TV: Item, Time, Price
    // ==========================================
    tv: [
        { 
            id: 'rtv', 
            name: 'RTV', 
            icon: Tv, 
            iconUrl: "path/to/rtv-icon.png",
            description: "Rwanda's national television broadcaster",
            price: "$1,200/30sec spot",
            priceValue: 1200,
            reach: "3M+ viewers",
            format: "TV commercials, program sponsorship",
            rateCards: [
                {
                    title: "Prime Time Commercial",
                    item: "30-second TV spot",
                    time: "7:00 PM - 10:00 PM (Mon-Fri)",
                    price: "$1,200 per spot",
                    imageUrl: "path/to/rtv-primetime.png",
                    additionalInfo: "Minimum booking: 5 spots per week"
                },
                {
                    title: "Morning Show Ad",
                    item: "30-second TV spot",
                    time: "6:00 AM - 9:00 AM (Mon-Fri)",
                    price: "$600 per spot",
                    imageUrl: "path/to/rtv-morning.png",
                    additionalInfo: "Great for breakfast & household products"
                },
                {
                    title: "Weekend Sports Package",
                    item: "30-second TV spot during sports programs",
                    time: "Saturdays & Sundays (2:00 PM - 6:00 PM)",
                    price: "$1,500 per weekend",
                    imageUrl: "path/to/rtv-sports.png",
                    additionalInfo: "Includes 4 spots per weekend"
                },
                {
                    title: "News Bulletin Sponsorship",
                    item: "5-second opening and closing brand mention",
                    time: "All news bulletins (8 PM main news)",
                    price: "$3,000 per month",
                    imageUrl: "path/to/rtv-news-sponsor.png",
                    additionalInfo: "Premium brand positioning"
                }
            ]
        },
        { 
            id: 'kc2', 
            name: 'KC2', 
            icon: Tv, 
            iconUrl: "path/to/kc2-icon.png",
            description: "Popular entertainment and lifestyle TV channel",
            price: "$800/30sec spot",
            priceValue: 800,
            reach: "1.5M+ viewers",
            format: "TV spots, product placement",
            rateCards: [
                {
                    title: "Entertainment Block",
                    item: "30-second TV commercial",
                    time: "8:00 PM - 11:00 PM (Daily)",
                    price: "$800 per spot",
                    imageUrl: "path/to/kc2-entertainment.png"
                },
                {
                    title: "Music Show Integration",
                    item: "Product placement in music videos show",
                    time: "Fridays & Saturdays (9:00 PM)",
                    price: "$1,500 per month",
                    imageUrl: "path/to/kc2-music.png",
                    additionalInfo: "Your product featured in 4 episodes"
                }
            ]
        },
    ],

    // ==========================================
    // RADIO: Item, Time, Price
    // ==========================================
    radio: [
        { 
            id: 'radio-rwanda', 
            name: 'Radio Rwanda', 
            icon: Radio, 
            iconUrl: "path/to/radio-rwanda-icon.png",
            description: "National radio broadcaster with widest coverage",
            price: "$400/30sec spot",
            priceValue: 400,
            reach: "4M+ listeners",
            format: "Radio spots, program sponsorship",
            rateCards: [
                {
                    title: "Morning Drive Time",
                    item: "30-second radio commercial",
                    time: "6:00 AM - 9:00 AM (Mon-Fri)",
                    price: "$400 per spot",
                    imageUrl: "path/to/radio-rwanda-morning.png",
                    additionalInfo: "Peak commuter hours - highest reach"
                },
                {
                    title: "Afternoon Show",
                    item: "30-second radio commercial",
                    time: "12:00 PM - 3:00 PM (Mon-Fri)",
                    price: "$300 per spot",
                    imageUrl: "path/to/radio-rwanda-afternoon.png"
                },
                {
                    title: "Evening Prime Time",
                    item: "30-second radio commercial",
                    time: "5:00 PM - 8:00 PM (Mon-Fri)",
                    price: "$450 per spot",
                    imageUrl: "path/to/radio-rwanda-evening.png",
                    additionalInfo: "Family listening time"
                },
                {
                    title: "Weekend Special",
                    item: "60-second extended spot",
                    time: "Saturdays & Sundays (10:00 AM - 4:00 PM)",
                    price: "$500 per spot",
                    imageUrl: "path/to/radio-rwanda-weekend.png",
                    additionalInfo: "Longer format for detailed messaging"
                }
            ]
        },
        { 
            id: 'kiss-fm', 
            name: 'Kiss FM', 
            icon: Radio, 
            iconUrl: "path/to/kiss-fm-icon.png",
            description: "Youth-focused music and entertainment radio",
            price: "$350/30sec spot",
            priceValue: 350,
            reach: "1.2M+ listeners",
            format: "Radio ads, DJ mentions",
            rateCards: [
                {
                    title: "Youth Drive Show",
                    item: "30-second radio spot with DJ mention",
                    time: "7:00 AM - 10:00 AM (Mon-Fri)",
                    price: "$350 per spot",
                    imageUrl: "path/to/kiss-fm-morning.png",
                    additionalInfo: "Young professional audience"
                },
                {
                    title: "Lunch Mix",
                    item: "30-second radio commercial",
                    time: "12:00 PM - 2:00 PM (Mon-Fri)",
                    price: "$250 per spot",
                    imageUrl: "path/to/kiss-fm-lunch.png"
                },
                {
                    title: "Weekend Party Package",
                    item: "Live DJ shout-outs + 3 x 30-second spots",
                    time: "Fridays & Saturdays (6:00 PM - 10:00 PM)",
                    price: "$1,000 per weekend",
                    imageUrl: "path/to/kiss-fm-party.png",
                    additionalInfo: "Perfect for events and nightlife brands"
                }
            ]
        },
    ],

    // ==========================================
    // BILLBOARDS: Can have flexible fields
    // ==========================================
    billboards: [
        { 
            id: 'akagera-media', 
            name: 'Akagera Media', 
            icon: MapPin, 
            iconUrl: "path/to/akagera-icon.png",
            description: "Premium billboard locations across Kigali",
            price: "$2,000/month",
            priceValue: 2000,
            reach: "500K+ daily impressions",
            format: "Static billboards, digital screens",
            rateCards: [
                {
                    title: "CBD Premium Location",
                    type: "Large Format Billboard (6m x 3m)",
                    description: "High-traffic location in Kigali city center near major roundabout",
                    quantity: "30 days",
                    price: "$2,000",
                    imageUrl: "path/to/akagera-cbd.png",
                    additionalInfo: "Installation and printing included"
                },
                {
                    title: "Airport Highway",
                    type: "Digital LED Screen",
                    description: "Dynamic digital display on main road to airport with 10-second rotation",
                    quantity: "30 days",
                    price: "$3,500",
                    imageUrl: "path/to/akagera-airport.png",
                    additionalInfo: "Share rotation with 5 other brands"
                }
            ]
        },
    ],

    // ==========================================
    // INFLUENCERS: Can have flexible fields
    // ==========================================
    influencers: [
        { 
            id: 'inf1', 
            name: 'Aime Rwanda 250', 
            icon: Users, 
            iconUrl: "path/to/influencer-icon.png",
            platforms: ['instagram'],
            description: "Travel and tourism content creator showcasing Rwanda",
            price: "$300/post",
            priceValue: 300,
            reach: "150K+ followers",
            format: "Instagram posts, stories, reels",
            rateCards: [
                {
                    title: "Single Instagram Post",
                    item: "1 feed post with product/brand feature",
                    description: "Professional photo with brand integration and caption mention",
                    quantity: "Stays on profile permanently",
                    price: "$300",
                    imageUrl: "path/to/inf-post.png",
                    additionalInfo: "Avg. engagement rate: 8.5%"
                },
                {
                    title: "Instagram Story Series",
                    item: "5-story sequence",
                    description: "Behind-the-scenes content featuring your brand/location",
                    quantity: "24-hour visibility",
                    price: "$200",
                    imageUrl: "path/to/inf-stories.png"
                },
                {
                    title: "Reel Package",
                    item: "1 Instagram Reel (30-60 seconds)",
                    description: "Trending audio with creative brand integration",
                    quantity: "Permanent on profile",
                    price: "$500",
                    imageUrl: "path/to/inf-reel.png",
                    additionalInfo: "Avg. 50K+ views per reel"
                }
            ]
        },
    ],
};

// ==============================================
// DATA STRUCTURE SUMMARY BY MEDIA TYPE
// ==============================================
/*

WEBSITES - Fields to include in rateCards:
{
    title: "Package Name",
    type: "Ad type/size",                    // NEW for websites
    description: "What it offers",
    quantity: "How many days on site",       // NEW for websites
    price: "$XXX",
    imageUrl: "path/to/image.png",
    additionalInfo: "Optional extra details"
}

RADIO - Fields to include in rateCards:
{
    title: "Package Name",
    item: "What's being sold",               // NEW for radio
    time: "Time slot",                       // NEW for radio
    price: "$XXX per spot",
    imageUrl: "path/to/image.png",
    additionalInfo: "Optional extra details"
}

TV - Fields to include in rateCards:
{
    title: "Package Name",
    item: "What's being sold",               // NEW for TV
    time: "Time slot",                       // NEW for TV
    price: "$XXX per spot",
    imageUrl: "path/to/image.png",
    additionalInfo: "Optional extra details"
}

BILLBOARDS & INFLUENCERS - Flexible fields:
Can use any combination of:
- type, description, quantity (like websites)
- item, time (like radio/TV)
- Or create custom fields as needed

*/