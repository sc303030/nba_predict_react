const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function(app) {
    app.use(
        "/nba",
        createProxyMiddleware({
            target: "https://nbapredict.pythonanywhere.com",
            changeOrigin: true,
        })
    )
}