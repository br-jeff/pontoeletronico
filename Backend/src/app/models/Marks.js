const Sequelize = require('sequelize')
const sequelize = require('../../config/database')

const marks = sequelize.define('marks', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  marks:{
       type: Sequelize.STRING,
  },
  cpf:{
    type: Sequelize.STRING,
  },
  date:{ type: Sequelize.DATE },

  createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE
    }

},

{ tableName: 'user_marks' } )

marks.sync()
module.exports = marks


