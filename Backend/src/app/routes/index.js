const routes = require('express').Router()
const home = require('./home')
const markRoute = require('./mark')
const qrcode = require('./qrcode')
const user = require('./user')

routes.use(home,markRoute)
routes.use(qrcode,user)

module.exports = routes