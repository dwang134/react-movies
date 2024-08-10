/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['image.tmdb.org'],
    },
    experimental: {
          missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;
