const express = require('express')
const routes = express.Router()
const cMarcaObra = require('../Controladores/MarcaObra/cMarcaObra')

routes.get("/marcacao", (req,res) => {
    cMarcaObra.listaMarcacao(req,res)
})
routes.post("/cria/marcacao", (req,res) => {
    cMarcaObra.criaMarcacao(req,res)
})
routes.put("/marca/online/:idFunc", (req,res) =>  {
    cMarcaObra.marcaOnline(req,res)
})

module.exports =  routes