const routes = require('express').Router()
const markController = require('../controller/markController')

routes.post('/mark/create',markController.create)
routes.get('/mark/list',markController.list)

module.exports = routes