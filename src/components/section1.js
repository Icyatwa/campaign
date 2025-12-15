import React from 'react'
import { motion } from 'framer-motion';
import Africa from '../img/Gemini_Generated_Image_p4o2hgp4o2hgp4o2.png'

function Section1() {
    return (
        <>
            <div className='w-full flex justify-center items-center'>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                    ONOMO Kigali
                </h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-4 sm:space-y-6 lg:space-y-8 order-2 lg:order-1"
                >
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight">
                        One Campaign. Every Screen.
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                        See how ONOMO could dominate digital, physical, and social advertising.
                    </p>
                </motion.div>

                <div className="w-full order-1 lg:order-2">
                    <img 
                        src={Africa}
                        className='w-80'
                        alt='africa'
                    />
                </div>
            </div>
        </>
    )
}

export default Section1