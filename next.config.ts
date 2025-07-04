import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    distDir: "dist", // Set the output directory to 'dist'
    images: {
        unoptimized: true, // Disable image optimization for Netlify
    },
};

export default nextConfig;
