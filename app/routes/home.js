/**
 * Created by jose.costa on 17/11/2016.
 */
module.exports = function (app)
{
    app.get("/", function (request, response)
    {
        var connection = app.config.connection();

        connection.query("select * from noticia;", function(error, result) {
            if (!error) {
                response.render("home/home.ejs", {noticias: result});
            } else {
                console.log(error);
            }
        });
    });
};