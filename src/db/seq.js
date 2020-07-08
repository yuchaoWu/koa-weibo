// 

const Sequelize = require('sequelize')
const { MYSQL_CONF } = require('../conf/db')
const { isProd, isTest } = require('../utils/env')

const { host, user, password, database } = MYSQL_CONF
const conf = {
    host: host,
    dialect: 'mysql'
}

const seq = new Sequelize(database, user, password, conf)

//  线上环境，使用连接池
if (isProd) {
    conf.pool = {
        max: 5,
        min: 0,
        idle: 10000
    }
}

if (isTest) {
    conf.logging = () => { }
}
// 测试连接
// seq.authenticate().then(() => {
//     console.log('ok')
// }).catch(() => {
//     console.log('err')
// })

module.exports = seq
