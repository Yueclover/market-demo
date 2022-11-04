const db = require('../mySql/connectSql')

const books = {}
//展示全部笔记信息
books.showBooksInfo = function (req, res) {
    const offset = req.query.offset
    const rows = req.query.rows
    const ssql = "select * from books LIMIT ? OFFSET ?"
    db.query(ssql,[Number(rows),Number(offset)],(err, result) => {
        if (err) {
            return res.send({
                status: false,
                resType: 301,
                msg: err
            })
        }
        res.send({
            status: true,
            resType: 200,
            result:result
        })
    })
}


module.exports = books
