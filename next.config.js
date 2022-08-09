/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images : {
    domains :[
    'links.papareact.com',
    'upload.wikimedia.org',
    '1000logos.net',
    'avatars.githubusercontent.com'
  ]
}
}

module.exports = nextConfig
