const routes = require('express').Router()
const home = require('./home')
const marcacao = require('./marcacao')
const numMarcacao = require('./numMarcacao')

routes.use(home,marcacao,numMarcacao)

module.exports = routes