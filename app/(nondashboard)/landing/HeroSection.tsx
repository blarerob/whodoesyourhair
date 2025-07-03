'use client';

import Image from 'next/image';
import React from "react";

const HeroSection = () => {
    return (
        <div>
            <Image
                src="/heroCover.jpg" // Path to your image in the public folder
                alt="Hero Background"
                style={{ objectFit: "fill" }}
                quality={100} // Optional: Adjust image quality
                priority // Optional: Prioritize loading for LCP
                className="z-[-1]" // Ensure image is behind content
                fill
            />
            <div className="flex flex-col items-center justify-center h-screen w-full absolute top-0 left-0 text-center text-white">
                <div className="flex flex-col items-center space-y-[-30px]">
                    <p className="text-[20px]">WHO DOES YOUR</p>
                    <h1 className="text-[150px] text-red-600 font-bold">HAIR</h1>
                    <p className="text-[22px]">KY</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;