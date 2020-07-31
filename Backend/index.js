const express = require('express')
const app = express()
const Sequelize = require('sequelize')
//const sequelize = new Sequelize(require('./Bancodedados/bancocfg'))
const bodyParser = require('body-parser')

const rotaInicio = require('./Rotas/Inicio')
const numMarcacao = require('./Rotas/numMarcacao')
const marcaObra = require('./Rotas/rMarcaObra')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",rotaInicio)
app.get("/marca/online/:idFunc/:numMarca", numMarcacao)

app.get("/marcacao",marcaObra)
app.post("/cria/marcacao",marcaObra)
app.put("/marca/online/:idFunc",marcaObra)

app.listen(3000,()=>{console.log("servidor iniciado")})
