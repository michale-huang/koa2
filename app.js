const fs = require('fs');
const Koa = require('koa');
// post请求通常会发送一个表单、JSON作为request的body发送，但无论是Node.js提供的原始request对象，还是koa提供的request对象，都不提供解析request的body的功能！此时需要借助koa-bodyparser插件
const bodyParser = require('koa-bodyparser');
const proxy = require('koa2-proxy-middleware');
const cors = require('koa2-cors');
const { historyApiFallback  } = require('koa2-connect-history-api-fallback');
const static = require('koa-static');
const path = require('path');

const getMenuByCode = require('./routes/getMenuByCode');
const login = require('./routes/login');

const routes = {
    getMenuByCode,
    login
};

const proxyOptions = {
    targets: {
        '/mouldApi': {
            target: 'http://192.168.1.20:17000/',
            changeOrigin: true
        },
        '/dictionaryApi': {
            target: 'http://192.168.1.20:18000/',
            changeOrigin: true
        },
        '/permissionApi/*': {
            target: 'http://192.168.1.20:15000/',
            changeOrigin: true,
            pathRewrite: { '^/permissionApi': '' }
        },
        '/entrustApi': {
            target: 'http://192.168.1.20:23000/',
            changeOrigin: true
        }
    }
};

const app = new Koa();

const port = 3001;

const staticPath = 'dist';

app.use(proxy(proxyOptions));

// app.use(cors())

app.use(bodyParser());

// app.use(historyApiFallback());

// 加载静态资源（js、css、img...）
app.use(static(
    path.join(__dirname, staticPath)
));

// app.use(getMenuByCode.routes());
// app.use(login.routes());

// for (const i in routes) {
//     app.use(routes[i].routes(), routes[i].allowedMethods())
// }

app.listen(port);
console.log(`app started at port ${port}...`);
