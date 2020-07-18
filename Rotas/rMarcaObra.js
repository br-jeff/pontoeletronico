const express = require('express')
const routes = express.Router()
const cMarcaObra = require('../Controladores/cMarcaObra')

routes.get("/marcacao", (req,res) => {
    cMarcaObra.listaMarcacao(req,res)
})
routes.post("/cria/marcacao", (req,res) => {
    cMarcaObra.criaMarcacao(req,res)
})
routes.put("/update/:id", (req,res) =>  {
    cMarcaObra.updateMarcacao(req,res)
})

module.exports =  routes