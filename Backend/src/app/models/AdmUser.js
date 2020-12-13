const Sequelize = require('sequelize')
const sequelize = require('../../config/database')
const bcrypt = require('bcryptjs');
const { password } = require('../../config/database/config');
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
        let salt = bcrypt.genSaltSync(4)
        return adm.password_hash = bcrypt.hashSync(adm.password,salt)
      }
    }
  },
  sequelize
})

Adm.prototype.checkPassword = async function(password){     
  let compare = await bcrypt.compareSync(password,this.password_hash)
  console.log(compare)
  return compare
}

Adm.sync()
module.exports = Adm
