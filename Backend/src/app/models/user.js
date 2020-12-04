const Sequelize = require('sequelize')
const sequelize,{Sequelize} = require('../../config/database')

const userMark = sequelize.define('userMark', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    cpf: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    marca1: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
},

{ tableName: 'userMark' } )

userMark.sync()
module.exports = userMark