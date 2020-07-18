const express = require('express');
const routes = express.Router();
const UserControlador = require('../Controladores/UserControlador')


routes.post('/users', (req,res) => {UserControlador.criaUser(req,res) } )
routes.get('/lista',  (req,res) => {UserControlador.listaUser(req,res)} )

module.exports = routes;