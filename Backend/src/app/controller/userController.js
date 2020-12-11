const User = require('../models/User')
module.exports = {  
    async create(req,res){
        try{
            const {name,cpf,company,pin} = req.body
        
            if(!name || !company || !cpf || !pin)
                return res.status(400).json({msg: 'Formato tem que ter name,company,cpf e pin'})
        
            const userCreated = await User.create({name,cpf,company,pin})
            return res.status(200).send(userCreated)
        }
        catch(err) {
            return res.status(500).json({msg : 'erro ao criar usuario '+err})
        }
    }
}