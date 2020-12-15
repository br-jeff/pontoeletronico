const Sequelize = require('sequelize')
const sequelize = require('../../config/database')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
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
  user: Sequelize.STRING, 
},{
  hooks: {
    beforeSave : (adm) => {
      if(adm.password){
        let salt = bcrypt.genSaltSync(4)
        return adm.password_hash =  bcrypt.hashSync(adm.password,salt)
      }
    }
  },
  sequelize
})

Adm.prototype.checkPassword = function(password){     
  return bcrypt.compareSync(password,this.password_hash)
}

Adm.prototype.generateToken = function() { 
  return jwt.sign({id:this.id},process.env.JWT_KEY)
}

Adm.sync()
module.exports = Adm
