const QRCode = require('qrcode')
const User = require('../models/User')
module.exports = {    
    async generate(req,res){
        try{
            const {cpf,pin} = req.body
            const jsonTextQR = JSON.stringify({cpf,pin})

            if( !cpf || !pin)
                return res.json({msg: 'Formato tem que ter cpf e pin'})
            
            const checkUser = await User.findOne({ where: { cpf,pin } })

            if(checkUser){
                QRCode.toDataURL(jsonTextQR, function (err, url) {
                    return res.status(200).json( { 
                          imageQRLink: url
                      })
                   })   
            }
            else{
                return res.status(500).send('Erro Usuario não existe ou pin inválido')
            }
            
              
        }
        catch(err) {
            console.log('err')
            return res.status(500).json({msg: 'erro ao criar qr code'+err})
        }
              
    },

    read(req,res){
        res.json('readQR')
    }
}