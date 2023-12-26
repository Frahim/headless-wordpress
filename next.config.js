/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_API_URL: 'https://uiexpertz.com/globallife-wp', // Replace with your actual API URL
    },
    images: {
        domains: ['uiexpertz.com'],
    },
}

module.exports = nextConfig
