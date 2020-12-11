const routes = require('express').Router()
const home = require('./home')
const markRoute = require('./mark')
const qrcode = require('./qrcode')
const user = require('./adm/user')
const admPublic = require('./adm')

routes.use(home,markRoute)
routes.use(qrcode,user)
routes.use(admPublic)

module.exports = routes