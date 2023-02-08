/** @type {import('next').NextConfig} */
module.exports = {
  typescript: {
  ignoreBuildErrors: true,
},
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
};