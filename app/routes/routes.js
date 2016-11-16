/**
 * Created by José Carlos on 21/10/2016.
 */
module.exports = function (app) {
    app.get("/", function (request, response) {

        app.use('/scripts', express.static(__dirname + "./node_modules/bootstrap/dist/"));

        var mysql = require("mysql");
        var connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "noticias"
        });

        connection.query("select * from noticia;", function(error, result) {
            if (!error) {
                response.render("home/home.ejs", {noticias: result});
            } else {
                console.log(error);
            }
        });
    });
};
