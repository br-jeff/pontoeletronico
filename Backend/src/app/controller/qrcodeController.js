const QRCode = require('qrcode')
module.exports = {
    
    generate(req,res){
        const {name,company,cpf,pin} = req.body
        const jsonTextQR = JSON.stringify({name,company,cpf,pin})
  
        QRCode.toDataURL(jsonTextQR, function (err, url) {
            res.json( { 
                imageQRLink: url
            })
         })       
    },

    read(req,res){
        res.json('readQR')
    }

}