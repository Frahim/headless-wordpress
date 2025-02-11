/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_URL: 'https://gblheadlesswp.enamahamed.site', // Replace with your actual API URL
    },
    images: {
        domains: ['gblheadlesswp.enamahamed.site'],
    },
}

module.exports = nextConfig
