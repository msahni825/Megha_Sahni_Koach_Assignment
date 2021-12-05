const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'university',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('DB connection established');
    }
    else{
        console.log('DB connection failed \n Error: '+JSON.stringify(err,undefined,2));
    }
});

module.exports = mysqlConnection;