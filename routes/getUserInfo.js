// 为了处理URL跳转的问题，我们需要引入koa-router中间件，让它负责处理URL映射
const router = require('koa-router')();
const allServices = require('../controllers/mysqlConfig')

router.prefix('/userApi');

router.get('/user', async (ctx) => {
  let resData = await allServices.findUserData(ctx.query.name);
  ctx.body = {
    code: 200,
    msg: '获取用户信息成功',
    data: resData[0] || {}
  };
});
router.post('/submitUserInfo', async (ctx) => {
  await allServices.addUserData(ctx.request.body);
  ctx.body = {
    code: 200,
    msg: '提交用户信息成功',
    data: null
  };
});
router.delete('/delUserInfo', async (ctx) => {
  await allServices.delUserData(ctx.request.body);
  ctx.body = {
    code: 200,
    msg: '删除用户信息成功',
    data: null
  };
});
router.put('/updateUserInfo', async (ctx) => {
  if (ctx.request.body.name == '' || ctx.request.body.age == '') {
    ctx.body = {
      code: 500,
      msg: '请输入姓名和年龄',
      data: null
    }
    return
  }
  await allServices.updateUserData(ctx.request.body);
  ctx.body = {
    code: 200,
    msg: '修改用户信息成功',
    data: null
  };
});

module.exports = router;
