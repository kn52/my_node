var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "ashish@123",
    database:"db1"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    // var sql = "Create table customers (name VARCHAR(255), address VARCHAR(255))";
    // var sql1 = "INSERT INTO customers (name, address) VALUES ('Company Ic', 'Highway 38'), ('Company Nc', 'Highway 39'),('Company Oc', 'Highway 40')";
    // var sql2 = "select *  from customers";
    // var sql3 = "select * from customers where name like '%Ic'";
    // con.query(sql3, function (err, result) {
    //     if (err) throw err;
    //     console.log(result);
    //   });
});

module.exports = con; 