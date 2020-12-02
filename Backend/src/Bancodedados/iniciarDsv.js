const Sequelize  = require('sequelize');
//const bdconfig =require('./bancocfg');
const configGithub = require('./configGithub');

const connection = new Sequelize(configGithub)



  module.exports = connection