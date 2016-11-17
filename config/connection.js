/**
 * Created by jose.costa on 17/11/2016.
 */
var mysql = require("mysql");

var connMySQL = function ()
{
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "noticias"
    });
};

module.exports = function ()
{
    return connMySQL;
};