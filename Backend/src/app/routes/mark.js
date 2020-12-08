const routes = require('express').Router()
const markController = require('../controller/markController')

routes.post('/mark/create',markController.create)

module.exports = routes