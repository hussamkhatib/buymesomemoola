module.exports = {
  images: {
    domains: ['media.istockphoto.com', 'res.cloudinary.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      child_process: false,
      readline: false,
    };
    return config;
  },
};
