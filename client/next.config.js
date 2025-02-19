/** @type {import('next').NextConfig} */
const nextConfig = {
  // Додайте ваші власні налаштування тут
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgo: true,
          },
        },
      ],
    });

    return config;
  },
  // Приклад: відключення автоматичного підбору Webpack
  webpack5: false,
  images: {
    domains: ["localhost"],
  },

  // інші налаштування...
};

module.exports = nextConfig;
