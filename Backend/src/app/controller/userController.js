const User = require('../models/User')



module.exports = {  
    async create(req,res){
        try{
            const {name,cpf,company,pin} = req.body
            const userCreated = await User.create({name,cpf,company,pin})
            return res.send(userCreated)
        }
        catch(err) {
            console.log(err)
            return res.send('erro ao criar usuario')
        }
    }
}