module.exports = {
  reactStrictMode: false,
  env: {
    ICE_SERVER_URL: process.env.ICE_SERVER_URL,
    ICE_SERVER_USERNAME: process.env.ICE_SERVER_USERNAME,
    ICE_SERVER_CREDENTIAL: process.env.ICE_SERVER_CREDENTIAL,
    BASE_URL: process.env.BASE_URL,
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};
