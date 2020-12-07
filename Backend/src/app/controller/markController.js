const User = require('../models/User')
const Mark = require('../models/Marks')
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
                return res.json( {msg: 'erro usuario não cadastrado'  })
            
            let dateToday = new Date()

            const checkUserMarkToday = await Mark.findOne({
                where:{
                   cpf,
                   createdAt: dateToday
                   }
               })

            if(!checkUserMarkToday)
               return res.send('nao marcou hoje fazer logica')
            

            return res.json(checkUser) 
        }
        catch(err){
            return res.json( {msg: 'erro ao tentar fazer marcação  ' + err })
        }
    }
}