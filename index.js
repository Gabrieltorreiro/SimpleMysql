const mysql = require("./src/mysql")({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: '123456',
    database: 'marketplace',
    table: 'user'
});

mysql.selectAll((data)=>{
    console.log(data);
});