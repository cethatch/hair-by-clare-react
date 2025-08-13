const { createProxyMiddleware } = require('http-proxy-middleware');

console.log('setupProxy.js loaded');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://effervescent-stroopwafel-efe523.netlify.app/.netlify/functions',
      changeOrigin: true,
    })
  );
};
