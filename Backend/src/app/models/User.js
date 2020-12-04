const Sequelize = require('sequelize')
const sequelize = require('../../config/database')

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
    company: { type: Sequelize.STRING },
    name: { type: Sequelize.STRING },
    pin: { type: Sequelize.STRING },
},

{ tableName: 'userMark' } )

userMark.sync()
module.exports = userMark