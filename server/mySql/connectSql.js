const mysql = require('mysql')


const db = mysql.createPool({
    host: '127.0.0.1',//数据库ip地址
    user: 'root',
    password: '123456',
    database: 'market',
})

module.exports = db