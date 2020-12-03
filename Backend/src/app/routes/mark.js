const routes = require('express').Router()
const markController = require('../controller/markController')

routes.post('/mark',markController.index)

module.exports = routes