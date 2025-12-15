import React from 'react'
import { Button } from './components';

function Section2() {
    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    Why This?
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <p className="text-base sm:text-lg text-gray-600 text-center leading-relaxed px-12 py-8">
                    Hotels advertise everywhere but they use different dashboards, different suppliers,
                    and different analytics sources, Yepper gives you one place to
                    control ads, monitor results, compare performance, and make
                    strategic marketing decisions.
                </p>

                <div className="max-w-2xl mx-auto">
                    <div className="relative p-6">
                        <div className="absolute inset-0 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <div className="flex justify-center">
                                <button 
                                    className="inline-flex items-center px-6 py-3 rounded-full bg-black text-white text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
                                >
                                    <span>View the Campaign Breakdown</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2