/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['www.npf.gov.ng'],
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'pngkey.com',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
        ],
    },
};

export default nextConfig;
