const  mssql = require('../../../Bancodedados/bancocfg')
const mysql = require('../../../Bancodedados/configGithub')
const  Sequelize  = require('sequelize')
const  sequelize = new Sequelize(mysql)

const marcacoes = sequelize.define('marcacoes', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    idFunc: {
        type: Sequelize.STRING,
    },
    dia:  {
        type: Sequelize.DATE,
    },
    marca1: {
        type: Sequelize.STRING
    },
    marca2: {
        type: Sequelize.STRING
    },
    marca3: {
        type: Sequelize.STRING
    },
    marca4: {
        type: Sequelize.STRING
    },
    marca5: {
        type: Sequelize.STRING
    },
    marca6: {
        type: Sequelize.STRING
    },
    marca7: {
        type: Sequelize.STRING
    },
    marca8: {
        type: Sequelize.STRING
    },
},
{
  tableName: 'NODE_PE_MARCACAO'
}
)

marcacoes.sync()
module.exports = {
    marcacoes

}