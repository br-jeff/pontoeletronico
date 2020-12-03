const routes = require('express').Router()
const home = require('./home')
const marcacao = require('./marcacao')
const numMarcacao = require('./numMarcacao')
const markRoute = require('./mark')
const qrcode = require('./qrcode')

routes.use(home,marcacao,numMarcacao,markRoute)
routes.use(qrcode)

module.exports = routes