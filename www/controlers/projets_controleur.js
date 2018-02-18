/*jshint esversion: 6 */
var BDD = require('mongoose')
var ProjetColl = require('../modeles/projets_modele');

module.exports = (app) => {
    app.get('/', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Portfolio",
            description: "Portfolio de Maxime Lacasse Germain contenant les dernières réalisations en web, jeux vidéo et multimédia.",
            robots: "INDEX, FOLLOW",
            keywords: "Web, jeux vidéo, portfolio"
        };
        res.render('index', {
            data: data
        });
    });

    app.get('/web', (req, res) => {
        let data = {};
        ProjetColl.find({categorie:"web"},(err, resultat) => {
            data.projets = resultat;

            data.infosPage = {
                title: "Maxime Lacasse Germain | Projets web",
                description: "Lorem",
                robots: "INDEX, FOLLOW",
                keywords: "lorem"
            };

            res.render('web', {
                data: data
            });
        });
    });

    app.get('/recuperer/:id', (req, res)=>{
        ProjetColl.findById(req.params.id, (err, resultat)=>{
            res.send(resultat);
        });
    });

    app.get('/jeux-video', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Projets de jeux vidéos",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "Lorem"
        };
        res.render('jeux-video', {
            data: data
        });
    });

    app.get('/multimedias', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Projets multimédias",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "Lorem"
        };
        res.render('multimedia', {
            data: data
        });
    });

    app.get('/bio', (req, res) => {
        let data = {};
        data.infosPage = {
            title: "Maxime Lacasse Germain | Biographie",
            description: "Lorem",
            robots: "INDEX, FOLLOW",
            keywords: "Lorem"
        };
        res.render('bio', {
            data: data
        });
    });
}