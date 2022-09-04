const Config = {
  title: 'David Saltares',
  description: 'Engineering Leadership & Software Development',
  url: 'https://saltares.com',
  author: 'David Saltares',
  postsPerPage: 30,
  includeFuture: process.env.INCLUDE_FUTURE === 'true',
  includeDrafts: process.env.INCLUDE_DRAFTS === 'true',
  disqusShortname: 'siondream',
  googleAnalyticsId: 'G-W8KS4SKGM6',
  useCache: process.env.USE_CACHE === 'true',
};

export default Config;
