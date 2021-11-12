var mysql = require('mysql');
var config = require('./defaultConfig');

var pool = mysql.createPool({
    host: config.database.HOST,
    database: config.database.DATABASE,
    user: config.database.USERNAME,
    password: config.database.PASSWORD
});

let allServices = {
    query: function (sql) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, (err, rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        // 当连接不再使用时，用connection对象的release方法将其归还到连接池中
                        connection.release()
                    })
                }
            })
        })

    },
   findUserData: function (name) {
       console.log(name)
        let _sql = `SELECT name, age, sex FROM base_info WHERE name="${name}";`
        return allServices.query(_sql)
    },
    addUserData: (userData) => {
        let _sql = `INSERT INTO base_info SET name="${userData.name}",age=${userData.age},sex=${userData.sex};`
        return allServices.query(_sql)
    },
    delUserData: (userData) => {
        let _sql = `DELETE FROM base_info WHERE name="${userData.name}";`
        return allServices.query(_sql)
    },
    updateUserData: (userData) => {
        let _sql = `UPDATE base_info SET age=${userData.age} WHERE name="${userData.name}";`
        return allServices.query(_sql)
    }
}

module.exports = allServices;
