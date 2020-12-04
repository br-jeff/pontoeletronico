const routes = require('express').Router()
const home = require('./home')
const markRoute = require('./mark')
const qrcode = require('./qrcode')

routes.use(home,markRoute,qrcode)

module.exports = routes