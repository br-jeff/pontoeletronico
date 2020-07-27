const express = require('express');
const routes = express.Router();
const numMarcacao = require('../Controladores/MarcaObra/numMarcacao')

routes.get("/marca/online/:idFunc/:numMarca",
 (req,res) => {numMarcacao.listaMarcacao(req,res)})

module.exports = routes;