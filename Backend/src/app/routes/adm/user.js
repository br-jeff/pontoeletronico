const routes = require('express').Router()
const user = require('../../controller/userController')

routes.post('/user/create',user.index)

module.exports = routes