const Adm = require('../models/AdmUser')
module.exports = {
    async register(req,res){
        try{
            const {user,password,company} = req.body

            if(!user || !password || !company)
               return res.status(400).json({msg: 'formato deve ter user,password e company'})
            
               const adm = await Adm.create({
                user,
                password,
                company
             })
               
            res.status(200).json({user: adm.user,company : adm.company})
        }
        catch { 
            (err)=>{
                res.status(500).json({msg:'error '+ err})
            } 
        }
    },
    async login(req,res){
        const { user,password }  = req.body

        const findAdm = await Adm.findOne({
            where: {user}
        })

        if(!findAdm)
            res.status(401).json(`Usuario inválido`)

        let checkPassword = findAdm.checkPassword(password) 

        if(checkPassword){
               let token =  findAdm.generateToken()
               res.send(token)
        }
        else 
            res.status(401).json(`senha inválida`)

        
    }
}
