const mysql = require('mysql2/promise');


const pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"zipzara3002",
    database:"todo",
    waitForConnections:true,
    connectionLimit:10
});


module.exports = pool;