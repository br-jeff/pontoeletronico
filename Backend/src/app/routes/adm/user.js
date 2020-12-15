const routes = require('express').Router()
const user = require('../../controller/userController')
const authMiddleware = require('../../middleware/auth')

routes.post('/adm/user/create',authMiddleware,user.create)

module.exports = routes