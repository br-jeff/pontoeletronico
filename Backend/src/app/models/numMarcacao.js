const mysql = require('../../config/database')
const Sequelize  = require('sequelize')
const sequelize = new Sequelize(mysql)

const numMarca = sequelize.define('numMarca', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  marca:{
       type: Sequelize.INTEGER,
  },
  idMarca: {
       type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
      },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
    }

},

{ tableName: 'NODE_PE_NUM_MARCACAO' } )

numMarca.sync()
module.exports = numMarca


