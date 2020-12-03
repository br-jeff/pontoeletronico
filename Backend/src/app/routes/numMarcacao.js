const express = require('express');
const routes = express.Router();
const numMarcacao = require('../controller/numMarcaController')

routes.get("/marca/online/:idFunc/:numMarca",numMarcacao.listaMarcacao)

module.exports = routes;