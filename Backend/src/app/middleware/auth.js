const jwt = require('jsonwebtoken')
require('dotenv').config()

module.exports = (req,res,next) => {
    const authToken = req.headers.authorization
    
    if(!authToken)
        return res.status(401).json({msg: 'Token é obrigatorio'})

    let token = authToken.split(' ')[1]
    let key = process.env.JWT_KEY

    jwt.verify(token,key,(err,result)=>{
        if(err)
            return res.status(500).send('JWT Inválido')

        return next()
    })
   
}