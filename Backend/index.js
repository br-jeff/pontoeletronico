const express = require('express')
const app = express() 
const Sequelize = require('sequelize')
const sequelize = new Sequelize(require('./Bancodedados/bancocfg'))
const bodyParser = require('body-parser')

const rotaInicio = require('./Rotas/Inicio')
const User = require('./Rotas/User')
const marca_obra = require('./Rotas/rMarcaObra')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/",rotaInicio)
app.post("/users", User)
app.get("/lista", User)

app.get("/marcacao",marca_obra)
app.post("/cria/marcacao",marca_obra)
app.put("/marca/online/:id",marca_obra)

app.listen(3000,()=>{console.log("servidor iniciado")})
