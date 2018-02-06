/*jshint esversion: 6 */
module.exports = (app) => {
    app.get('/', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Portfolio",
            description: "Portfolio de Maxime Lacasse Germain contenant les dernières réalisations en web, jeux vidéo et multimédia.",
            robots: "INDEX, FOLLOW",
            keywords: "Web, jeux vidéo, portfolio"
        };
        res.render('index', {data: data});
    });

    app.get('/web', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Projets web",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "lorem"
        };
        res.render('web', {data:data});
    });

    app.get('/jeuxvideo', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Projets de jeux vidéos",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "Lorem"
        };
        res.render('jeuxvideo', {data:data});
    });

    app.get('/multimedias', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Projets multimédias",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "Lorem"
        };
        res.render('multimedia', {data:data});
    });

    app.get('/bio', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Biographie",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "Lorem"
        };
        res.render('bio',{data:data});
    });
}