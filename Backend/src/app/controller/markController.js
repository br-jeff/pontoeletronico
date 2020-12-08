const User = require('../models/User')
const Mark = require('../models/Marks')
const {Op} = require('sequelize')
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
            
                let dateObj = new Date()
                let day = dateObj.getDate()
                let month = dateObj.getMonth() + 1
                let year = dateObj.getFullYear()
                let dateToday = new Date(year + "-" + month + "-" + day)
                let HourAndMinutes = `${dateObj.getHours()}:${dateObj.getMinutes()}`

                const checkUserMarkToday = await Mark.findOne({
                where:{
                    cpf,
                    createdAt: { [Op.gte]:dateToday }
                   },
                })

            if(!checkUserMarkToday){
                const createMark = await Mark.create({
                    cpf,
                    marks: `[${HourAndMinutes}]` 
                })

                let createdUser = {
                    msg: 'Primeira marcação do dia',
                    cpf,
                    marks: createMark.marks
                }

                return res.json(createdUser)
             }
            else{
                let markStringValue = checkUserMarkToday.dataValues.marks
                console.log(markStringValue)
                return res.json('test')
            }
             
             
        }
        catch(err){
            return res.json( {msg: `erro ao tentar fazer marcação  ${err} ` })
        }
    }
}