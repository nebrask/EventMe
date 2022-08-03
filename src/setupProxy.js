const { createProxyMiddleware }=require('http-proxy-middleware');
module.exports = function(app) {
    app.use(createProxyMiddleware('/events/',{target:'http://localhost:3001'})),
    app.use(createProxyMiddleware('/coordinates/',{target:'http://localhost:3002'}))
}