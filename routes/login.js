// 为了处理URL跳转的问题，我们需要引入koa-router中间件，让它负责处理URL映射
const router = require('koa-router')();

router.get('/login', async (ctx, next) => {
    ctx.body = `<h1>Index</h1>
                <form action="/signin" id="login-form" method="post">
                    <p>Name: <input name="name" value=""></p>
                    <p>Password: <input name="password" type="password"></p>
                    <p><input type="submit" value="Submit"></p>
                    </form>
                <div id="result"></div>
                <script>
                    const form = new FormData(document.getElementById('login-form'));
                    fetch('http://localhost:8980/user/hh').then(res => {
                        res.json().then(data => {
                            document.querySelector('#result').innerText = data
                            console.log(data)
                        })
                    })
                    fetch('http://localhost:8980/submitUserInfo?age=12', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({name: 'hh'})
                    }).then(res => {
                        res.json().then(data => {
                            console.log(data)
                        })
                    })
                </script>`;
});

router.post('/submitUserInfo', async ctx => {
    ctx.body = ctx.request.body
});


router.get('/user/:name', async (ctx, next) => {
    let resData = {
        code: 200,
        data: {
            name: 'hh',
            age: 18
        }
    }
    const name = ctx.params.name;
    // ctx.body = JSON.stringify(resData);
    ctx.body = resData;
});

router.post('/signin', async (ctx, next) => {
    const name = ctx.request.body.name;
    const psw = ctx.request.body.password;
    if (name === 'hh'  && psw === '123') {
        ctx.body = `<h3>Welcome ${name}</h3>`
    } else {
        ctx.body = '<h3>账号密码错误！</h3>'
    }
});

module.exports = router;
