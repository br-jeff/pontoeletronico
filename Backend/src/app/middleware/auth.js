const jwt = require('jsonwebtoken')
module.exports = (req,res,next) => {
    const authToken = req.headers.authorization
    
    if(!authToken)
        return res.status(401).json({msg: 'Token é obrigatorio'})

    token = authToken.split(' ')[1]
        console.log(token)
    return next()

}