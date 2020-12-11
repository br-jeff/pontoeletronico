const routes = require('express').Router()
const admPublic = require('../controller/admPublic')

routes.post('/adm/register',admPublic.register)
routes.post('/adm/login',admPublic.login)

module.exports = routes