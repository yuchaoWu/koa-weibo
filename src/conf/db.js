/**
 * @description 存储配置
 * @author wyc
 */

const { isProd } = require('../utils/env')

let REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
}

let MYSQL_CONF = {
    user: 'root',
    password: 'root',
    host: '127.0.0.1',
    port: '3306',
    database: 'koa2_weibo_db'
}


if (isProd) {
    REDIS_CONF = {
        // 线上的redis配置
        port: 6379,
        host: '127.0.0.1'
    }
    MYSQL_CONF = {
        // 线上的mysql配置
        user: 'root',
        password: 'root',
        host: '127.0.0.1',
        port: '3306',
        database: 'koa2_weibo_db'
    }
}

module.exports = {
    REDIS_CONF,
    MYSQL_CONF
}