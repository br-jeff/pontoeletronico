const User = require('../models/User')
module.exports = {
   async index(req,res){
        try{
            const {cpf} = req.body
            if(!cpf) 
             return res.json({msg: 'Precisa enviar um json contendo cpf'})
                    
            const checkUser = await User.findOne({
                 where:{
                    cpf
                }
            })
             
            if(!checkUser) 
                return res.json( {msg: 'erro usuario não cadastrado '  })
                           
            

            return res.json(checkUser) 
        }
        catch(err){
            return res.json( {msg: 'erro ao tentar fazer marcação ' + err })
        }
    }
}