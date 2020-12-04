const User = require('../models/User')



module.exports = {  
    async create(req,res){
        const {name,cpf,company,pin} = req.body
        const userCreated = await User.create({name,cpf,company,pin})
        res.send(userCreated)
    }
}