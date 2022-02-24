/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [{
            source: '/',
            destination: '/mynfts',
            permanent: true,
        }]
    },
}

module.exports = nextConfig
