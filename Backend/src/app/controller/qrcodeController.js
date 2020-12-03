const QRCode = require('qrcode')
module.exports = {
    
    generate(req,res){
        let qrText = 'test for qr text'
        QRCode.toDataURL(qrText, function (err, url) {
            res.json( { 
                imageQRLink: url
            })
         })       
    },

    read(req,res) {
        res.send('Read')

    }

}