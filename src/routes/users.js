const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const { SECRET } = require('../conf/constants')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.post('/login', async (ctx, next) => {
  const { userName, password } = ctx.request.body
  let userInfo
  if (userName === 'zhangsan' && password === 'abc') {
    userInfo = {
      userId: 1,
      userName: 'zhangsan',
      nickName: '张三',
      gender: 1
    }
  }
  // 加密 userinfo
  let token
  if (userInfo) {
    token = jwt.sign(userInfo, SECRET, { expiresIn: '1h' })
  }


  if (userInfo == null) {
    ctx.body = {
      error: -1,
      msg: '登录失败'
    }
    return
  }
  ctx.body = {
    error: 0,
    data: token
  }
})

module.exports = router
