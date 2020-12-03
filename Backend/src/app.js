const express = require('express')
const app = express()
require('dotenv').config();

const routes = require('./app/routes')
const numMarcacao = require('./app/rotas/numMarcacao')
const marcaObra = require('./app/rotas/rMarcaObra')

app.use(express.json())
app.use(routes)

app.get("/marca/online/:idFunc/:numMarca", numMarcacao)

app.get("/marcacao",marcaObra)
app.post("/cria/marcacao",marcaObra)
app.put("/marca/online/:idFunc",marcaObra)

module.exports = app