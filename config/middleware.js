module.exports = {
  timeout: 100,
  load: {
    before: ['responseTime', 'logger', 'cors', 'responses', 'gzip'],
    order: [
      "Define the middlewares' load order by putting their name in this array is the right order",
    ],
    after: ['parser', 'router'],
  },
  settings: {
    cors: {
      origin: 'https://kashmediafilms.com',
    },
    favicon: {
      path: 'favicon.ico',
      maxAge: 86400000
    },
    public: {
      path: './public',
      maxAge: 60000,
    },
  },
};
