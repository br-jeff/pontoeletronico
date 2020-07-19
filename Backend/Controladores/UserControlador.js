const User = require('../ModelosTabela/User');

module.exports = {
  async criaUser(req,res) {
    const {age} = req.body
    const users = await User.create({age})
    res.status(201).send( {age})
  },

  async listaUser(req,res)  {
    var users =  User.findAll().
    then( event => res.json(event))
  }


}

