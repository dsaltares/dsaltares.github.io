const Config = {
  postsPerPage: 30,
  includeFuture: process.env.INCLUDE_FUTURE === 'true',
  includeDrafts: process.env.INCLUDE_DRAFTS === 'true',
};

export default Config;
