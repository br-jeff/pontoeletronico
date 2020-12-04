const config = require('./config')
const Sequelize  = require('sequelize')
const connetion = new Sequelize(config)
module.exports = connetion