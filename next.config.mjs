/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dbw3zep4prcju.cloudfront.net",
        pathname: "/animal/**",
        // search: "",
      },
    ],
  },
};

export default nextConfig;
