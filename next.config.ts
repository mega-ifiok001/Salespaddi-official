import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        'ubiquitous-computing-machine-jj5rvvgrw555fj5q7-3000.app.github.dev',
        'localhost:3000',
        "https://salespaddi-official.vercel.app/"
      ],
    },
  },
  images: {
    domains: [
      'i.pinimg.com',
      'unsplash.com',
      'images.unsplash.com',
      'imgur.com',
      'lh3.googleusercontent.com',
      'i.imgur.com',
      'images.pexels.com',
      'cdn.pixabay.com',
      'res.cloudinary.com',
      'pbs.twimg.com',
      'media.licdn.com',
      'firebasestorage.googleapis.com',
      'cdn.shopify.com',
      'images.ctfassets.net',
      'raw.githubusercontent.com',
    ],
  },
};

export default nextConfig;
