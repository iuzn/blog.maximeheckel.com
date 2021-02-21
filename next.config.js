const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  trailingSlash: true,
  target: 'serverless',
  images: {
    domains: [
      'pbs.twimg.com', // Twitter Profile Picture
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer) {
      require('./scripts/generate-sitemap');
      require('./scripts/generate-cache');
      require('./scripts/generate-rss');
    }

    return config;
  },
});
