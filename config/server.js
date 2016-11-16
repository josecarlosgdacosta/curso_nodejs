/**
 * Created by José Carlos on 21/10/2016.
 */
var express = require("express");
var app = express();

// Aqui é informado ao Express que o view engine utilizado será o EJS.
app.set("view engine", "ejs");
// Aqui é informado ao Express que o diretório de views padrão será 'app/views'.
app.set("views", "./app/views");
// Aqui o servidor é iniciado na porta 3000.
app.listen(3000, function () {
    console.log("SERVER STARTED.");
});
// Aqui, a instância do Express é exportada para que seja utilizada em toda a eplicação por meio do 'require'.
module.exports = app;