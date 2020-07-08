/**
 * @description sequelize同步数据库 
 * @author wyc
 */
const seq = require('./seq')

// require('./model')

// console.log('seq', seq)
seq.authenticate().then(() => {
    console.log('ok')
}).catch(() => {
    console.log('err')
})

// 同步 force: true会每次都清空之前的数据
seq.sync({ force: true }).then(() => {
    console.log('sync ok')
    process.exit()

})