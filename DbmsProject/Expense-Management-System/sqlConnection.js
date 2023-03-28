//For making connections
const mysql = require('mysql2');
const dotenv = require('dotenv');
dotenv.config();

const con = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB
});

con.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected");
});

module.exports.con = con;