import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

function RateCardSlider({ rateCards, platformName }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % rateCards.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + rateCards.length) % rateCards.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  if (!rateCards || rateCards.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No rate cards available
      </div>
    );
  }

  const currentCard = rateCards[currentSlide];

  return (
    <div className="relative">
      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-xl">
        {/* Navigation Arrows */}
        {rateCards.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </>
        )}

        {/* Card Content */}
        <div className="bg-gradient-to-br from-gray-50 to-white p-6 min-h-[400px]">
          <div className="grid md:grid-cols-2 gap-6 h-full">
            {/* Left Side - Image */}
            <div className="flex items-center justify-center bg-white rounded-lg border-2 border-gray-200 p-4 overflow-hidden">
              {currentCard.imageUrl ? (
                <img
                  src={currentCard.imageUrl}
                  alt={`${platformName} - ${currentCard.title || 'Rate Card'}`}
                  className="w-full h-full object-contain max-h-[350px]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="hidden w-full h-full items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                    <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium">Add image here</p>
                </div>
              </div>
            </div>

            {/* Right Side - Information */}
            <div className="space-y-4">
              {/* Title */}
              {currentCard.title && (
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">
                    {currentCard.title}
                  </h4>
                </div>
              )}

              {/* WEBSITES: Type, Description, Quantity, Price */}
              {currentCard.type && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Type
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentCard.type}
                  </p>
                </div>
              )}

              {currentCard.description && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Description
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentCard.description}
                  </p>
                </div>
              )}

              {currentCard.quantity && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Quantity (Duration)
                  </h5>
                  <p className="text-lg font-semibold text-gray-900">
                    {currentCard.quantity}
                  </p>
                </div>
              )}

              {/* RADIO & TV: Item, Time, Price */}
              {currentCard.item && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Item
                  </h5>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {currentCard.item}
                  </p>
                </div>
              )}

              {currentCard.time && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Time Slot
                  </h5>
                  <p className="text-lg font-semibold text-gray-900">
                    {currentCard.time}
                  </p>
                </div>
              )}

              {/* Pricing - Common for all */}
              {currentCard.price && (
                <div className="bg-black text-white rounded-lg p-4">
                  <h5 className="text-xs font-semibold uppercase mb-2 opacity-80">
                    Price
                  </h5>
                  <p className="text-3xl font-bold">
                    {currentCard.price}
                  </p>
                  {currentCard.priceDetails && (
                    <p className="text-sm mt-1 opacity-80">
                      {currentCard.priceDetails}
                    </p>
                  )}
                </div>
              )}

              {/* Optional fields that might appear in some cards */}
              {currentCard.reach && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Reach
                  </h5>
                  <p className="text-lg font-semibold text-gray-900">
                    {currentCard.reach}
                  </p>
                </div>
              )}

              {currentCard.format && (
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase mb-2">
                    Ad Format
                  </h5>
                  <p className="text-sm text-gray-700">
                    {currentCard.format}
                  </p>
                </div>
              )}

              {/* Additional Info */}
              {currentCard.additionalInfo && (
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-sm text-blue-900">
                    {currentCard.additionalInfo}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dot Indicators */}
      {rateCards.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {rateCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentSlide
                  ? 'w-8 h-3 bg-black'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide Counter */}
      {rateCards.length > 1 && (
        <div className="text-center mt-3 text-sm text-gray-500 font-medium">
          {currentSlide + 1} / {rateCards.length}
        </div>
      )}
    </div>
  );
}

export default RateCardSlider;