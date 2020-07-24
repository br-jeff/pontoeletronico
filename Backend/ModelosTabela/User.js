const Sequelize = require('sequelize')
const mssql = require('../Bancodedados/bancocfg')
const mysql = require('../Bancodedados/configGithub')
const sequelize = new Sequelize(mysql);

const Users = sequelize.define('users',{
  age:{
    type: Sequelize.INTEGER
   },
});

Users.sync()

module.exports =  Users