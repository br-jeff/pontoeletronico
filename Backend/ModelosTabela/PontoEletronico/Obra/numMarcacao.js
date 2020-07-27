const Sequelize = require('sequelize')
//const mssql = require('../Bancodedados/bancocfg')
const mysql = require('../../../Bancodedados/configGithub')
const sequelize = new Sequelize(mysql);

const numMarcacao = sequelize.define('numMarcacao',{
  marca:{
    type: Sequelize.INTEGER
   },
  idMarca:{ // chave do model marcaObra
    type: Sequelize.INTEGER,
    primaryKey: true,
  },
},
{
  tableName: 'NODE_PE_NUM_MARCACAO'
}
);

numMarcacao.sync()

module.exports =  numMarcacao