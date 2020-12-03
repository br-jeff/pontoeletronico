const QRCode = require('qrcode')
module.exports = {
    
    generate(req,res){
        const jsonTextQR = JSON.stringify(req.body)
  
        QRCode.toDataURL(jsonTextQR, function (err, url) {
            res.json( { 
                imageQRLink: url
            })
         })       
    },

    read(req,res) {
        res.send('Read')

    }

}