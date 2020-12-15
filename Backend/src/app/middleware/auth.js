const jwt = require('jsonwebtoken')
module.exports = (req,res,next) => {
    const authToken = req.header.authorization
    
    if(!authToken)
        return res.status(401).json({msg: 'Token é obrigatorio'})
    
    return next()

}