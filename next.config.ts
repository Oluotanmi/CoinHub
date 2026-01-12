import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images : {
          unoptimized: true,
          remotePatterns: [
            { hostname: "assets.coingecko.com" },
            { hostname: "coin-images.coingecko.com" },
            { hostname: "static.coinpaprika.com" },
            { hostname: "s2.coinmarketcap.com" },
            { hostname: "cryptologos.cc" },
            { hostname: "firebasestorage.googleapis.com" },
            { hostname: "images.unsplash.com" },
          ],
          formats: ["image/webp", "image/avif"],
    }
};

export default nextConfig;
