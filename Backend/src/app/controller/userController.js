const User = require('../models/User')
module.exports = {
  
    async createUser(name,cpf,company){
        const userCreate = await User.create({
            name,
            cpf,
            company
        })
        return userCreate
    },

    index(req,res){
        res.send('rotaok')
    }
}