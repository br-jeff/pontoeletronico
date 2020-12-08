const Sequelize = require('sequelize')
const sequelize = require('../../config/database')
const bcrypt = require('bcrypt')

const admUser = sequelize.define('admUser', {
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  user:{
       type: Sequelize.STRING,
  },
  password:{
    type: Sequelize.VIRTUAL,
  },
  password_hash: DataTypes.STRING,
},
{
    hooks: {
        beforeSave: async admUser => {
            if(admUser.password)
              admUser.password_hash = await bcrypt.hash(admUser.password,4)
        }
    }
},
{ tableName: 'adm_users'})

admUser.sync()
module.exports = marks


