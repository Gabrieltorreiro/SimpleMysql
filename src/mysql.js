const sql = require('mysql');

class Mysql {
    constructor(config) {
        this.conn = sql.createConnection(config);
        this.conn.connect();
        this.table = config.table;
        this.db = config.database;
    }

    selectAll(callback) {
        this.conn.query(`SELECT * FROM ${this.table};`, (err, res) => {
            callback(res);
        });
    }

}

function mysql(config){
    return new Mysql(config);
}

module.exports = mysql;