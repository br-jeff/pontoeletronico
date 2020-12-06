const QRCode = require('qrcode')
module.exports = {    
    generate(req,res){
        try{
            const {name,company,cpf,pin} = req.body
            const jsonTextQR = JSON.stringify({name,company,cpf,pin})

            if(!name || !company || !cpf || !pin)
                return res.json({msg: 'Formato tem que ter name,company,cpf e pin'})
            
            QRCode.toDataURL(jsonTextQR, function (err, url) {
              return res.json( { 
                    imageQRLink: url
                })
             })     
        }
        catch(err) {
            console.log('err')
            return res.json({msg: 'erro ao criar qr code'})
        }
              
    },

    read(req,res){
        res.json('readQR')
    }
}