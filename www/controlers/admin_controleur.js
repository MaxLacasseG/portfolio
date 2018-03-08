/*jshint esversion: 6 */
const BDD = require('mongoose')
const ProjetColl = require('../modeles/admin_modele');

module.exports = (app) => {

    app.get('/admin', (req, res) => {
        res.render('adminConn');
    });

    app.post('/adminConnexion', (req, res) => {
        console.log(req.body);
        res.redirect('/admin');
    });
}