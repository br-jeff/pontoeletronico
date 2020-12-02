const express = require('express')
const app = express()
require('dotenv').config();

const rotaInicio = require('./Rotas/Inicio')
const numMarcacao = require('./Rotas/numMarcacao')
const marcaObra = require('./Rotas/rMarcaObra')

app.use(express.json())

app.get("/",rotaInicio)
app.get("/marca/online/:idFunc/:numMarca", numMarcacao)

app.get("/marcacao",marcaObra)
app.post("/cria/marcacao",marcaObra)
app.put("/marca/online/:idFunc",marcaObra)

module.exports = app