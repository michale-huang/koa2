const fs = require('fs');
const Koa = require('koa');
const views = require('koa-views');
// post请求通常会发送一个表单、JSON作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的request对象，都不提供解析request的body的功能！此时需要借助koa-bodyparser插件
const bodyParser = require('koa-bodyparser');
// const proxy = require('koa2-proxy-middleware');
const k2c = require('koa2-connect');
const { createProxyMiddleware } = require('http-proxy-middleware');
// vue-router为history模式时，刷新页面会404
// koa2的一个中间件，用于处理vue-router使用history模式返回index.html，让koa2支持SPA应用程序。
const { historyApiFallback  } = require('koa2-connect-history-api-fallback');
// const compress = require('koa-compress');
const static = require('koa-static');
const path = require('path');
const route = require('koa-route')
const websockify = require('koa-websocket');
const cors = require('koa2-cors');

const getMenuByCode = require('./routes/getMenuByCode');
const login = require('./routes/login');

const app = websockify(new Koa());

const port = 3003;

// const staticPath = '/dist-iframe';
const staticPath = '/test2';

app.ws.use((ctx, next) => {
    ctx.websocket.send("连接成功");
    return next(ctx);
});

app.ws.use(route.all('/', function (ctx) {
    /**接收消息*/
    ctx.websocket.on('message', function (message) {
        console.log(message);
        // 返回给前端的数据
        let data = JSON.stringify({
            id: Math.ceil(Math.random()*1000),
            time: parseInt(new Date()/1000)
        })
        ctx.websocket.send(data);
    })
}));

// 开启压缩
// app.use(compress({
//     threshold: 2048,
//     gzip: {
//         flush: require('zlib').constants.Z_SYNC_FLUSH
//     }
// }))

const routes = {
    getMenuByCode,
    login
};

// app.use('/permissionApi', createProxyMiddleware({ target: 'http://192.168.1.20:15000', changeOrigin: true, pathRewrite: { '/permissionApi': '' } }))
app.use(async (ctx, next) => {
    if (ctx.url.startsWith('/mouldApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:17000',
            changeOrigin: true,
            pathRewrite: { '^/mouldApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/dictionaryApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:18000',
            changeOrigin: true,
            pathRewrite: { '^/dictionaryApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/permissionApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:15000',
            changeOrigin: true,
            pathRewrite: { '^/permissionApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/entrustApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:23000',
            changeOrigin: true,
            pathRewrite: { '^/entrustApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/logisticsApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:22000',
            changeOrigin: true,
            pathRewrite: { '^/logisticsApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/productApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:27000',
            changeOrigin: true,
            pathRewrite: { '^/productApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/loginApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:16000',
            changeOrigin: true,
            pathRewrite: { '^/loginApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/homeApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:20000',
            changeOrigin: true,
            pathRewrite: { '^/homeApi': '' }
        }))(ctx, next)
    }
    if (ctx.url.startsWith('/logisticsPlanApi')) {
        // ctx.respond = false
        await k2c(createProxyMiddleware({
            target: 'http://192.168.1.20:24000',
            changeOrigin: true,
            pathRewrite: { '^/logisticsPlanApi': '' }
        }))(ctx, next)
    }
    await next()
})

app.use(bodyParser({
    // enableTypes: ['json', 'form', 'text']
}));

app.use(cors());

// 默认会将所有的请求都指向到index.html，这样可能就会导致项目内其他路由也被指向到index.html
// whiteList: 白名单，配置的请求不会被指向index.html
app.use(historyApiFallback({ whiteList: ['/whiteList'] }));

// 加载静态资源（js、css、img...）
app.use(static(path.join(__dirname, staticPath),
    {
        // 默认index.html页面
        index: 'index.html'
    })
);

//ejs模板引擎
app.use(views(__dirname + '/views', {
    extension: 'ejs'
}));

for (const i in routes) {
    app.use(routes[i].routes(), routes[i].allowedMethods())
}

app.listen(port);
console.log(`app started at port ${port}...`);
