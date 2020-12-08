const User = require('../models/User')
const Mark = require('../models/Marks')
const {Op} = require('sequelize')
const dateAndTimeNow = require('../../utils/dateAndTimeNow')
module.exports = {
   async create(req,res){
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
           
                let dateToday = dateAndTimeNow.dateNow()
                let HourAndMinutes = dateAndTimeNow.hourNow()

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
                let lastBracketPos = markStringValue.length
                let removedBrackets = markStringValue.slice(1,lastBracketPos -1 )

                let arrayMarks = removedBrackets.split(',')
                arrayMarks.push(HourAndMinutes)

                let arrayMarkString = `[${arrayMarks}]`
                let idMark = checkUserMarkToday.dataValues.id

                await Mark.update(
                    { marks: arrayMarkString } ,
                    { where: { id : idMark } }
                )

                let markUpdated = {
                    msg : 'marcação feita',
                    marks : arrayMarkString
                }
                return res.json(markUpdated)
            }
        }
        catch(err){
            return res.json( {msg: `erro ao tentar fazer marcação  ${err} ` })
        }
    }
}