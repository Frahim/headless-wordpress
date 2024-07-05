/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_URL: 'https://gblheadlesswp.uiexpertz.com/', // Replace with your actual API URL
    },
    images: {
        domains: ['gblheadlesswp.uiexpertz.com'],
    },
}

module.exports = nextConfig
