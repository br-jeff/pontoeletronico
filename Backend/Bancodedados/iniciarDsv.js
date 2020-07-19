const Sequelize  = require('sequelize');
const bdconfig = require('./bancocfg')

const connection = new Sequelize(bdconfig)



  module.exports = connection