const routes = require('express').Router()
const markController = require('../controller/markController')

routes.post('/mark',markController.create)

module.exports = routes