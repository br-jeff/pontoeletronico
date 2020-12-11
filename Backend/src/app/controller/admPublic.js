const admUser = require('../models/AdmUser')
module.exports = {
    async register(req,res){
        try{
            const {user,password,company} = req.body

            if(!user || !password || !company)
               return res.status(500).json({msg: 'formato deve ter user,password e company'})
            
               const adm = await admUser.create({
                user,
                password,
                company
            })
            res.status(200).json({msg: 'register route'})
        }
        catch { 
            (err)=>{
                res.status(500).json({msg:'error '+ err})
            } 
        }
    },
    login(req,res){
        res.json({msg: 'login route'})
    }
}
