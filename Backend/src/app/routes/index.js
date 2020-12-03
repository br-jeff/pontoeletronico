const routes = require('express').Router()
const home = require('./home')
const marcacao = require('./marcacao')
const numMarcacao = require('./numMarcacao')
const markRoute = require('./mark')

routes.use(home,marcacao,numMarcacao,markRoute)


module.exports = routes