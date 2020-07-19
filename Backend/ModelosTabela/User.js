const Sequelize = require('sequelize')
const bdconfig = require('../Bancodedados/bancocfg')
const sequelize = new Sequelize(bdconfig);

const Users = sequelize.define('users',{
  age:{
    type: Sequelize.INTEGER
   },
});

Users.sync()

module.exports =  Users