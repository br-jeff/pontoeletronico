const Sequelize = require('sequelize')
const sequelize = require('../../config/database')
const bcrypt = require('bcryptjs');
require('dotenv').config();

const Adm = sequelize.define('adm',{
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  password: Sequelize.VIRTUAL,
  password_hash: Sequelize.STRING, 
  company: Sequelize.STRING, 
},{
  hooks: {
    beforeSave : async (adm) => {
      if(adm.password){
        let keybcrypt = process.env.BRCYPT_KEY
        let salt = bcrypt.genSaltSync(4)
        return adm.password_hash = bcrypt.hashSync(keybcrypt,salt)
      }
    }
  },
  sequelize
})



Adm.sync()
module.exports = Adm
