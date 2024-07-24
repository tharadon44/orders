const mysql = require ('mysql2');
const dotenv = repuire ('dotenv');

dotenv.config;

const connection = mysql.createPool({
    host : process.env.HOST,
    user : process.env.USER,
    database : process.env.DATABASE,
    password : process.env.PASSWORD,
    port : process.env.PORT
});
module.exports=connection.promise();