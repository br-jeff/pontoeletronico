const routes = require('express').Router()
const user = require('../../controller/userController')

routes.post('/adm/user/create',user.index)

module.exports = routes