import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.dummyjson.com","lh3.googleusercontent.com"], // Add the domain of the image
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true, // Permanent redirect (status code 308)
      },
    ];
  },
};

export default nextConfig;
