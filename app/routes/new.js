/**
 * Created by jose.costa on 17/11/2016.
 */
module.exports = function (app)
{
    app.get("/new", function(request, response) {
        response.render("noticias/nova-noticia.ejs", {});
    });
};