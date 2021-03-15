const sql = require('mysql');

function mysql(config) {
    this.conn = sql.createConnection(config);
    this.conn.connect();
    this.table = config.table;
    this.db = config.database;

    this.selectAll = function (callback) {
        this.conn.query(`SELECT * FROM ${this.table};`, (err, res) => {
            callback(res);
        });
    }

    return this;
}

module.exports = mysql;