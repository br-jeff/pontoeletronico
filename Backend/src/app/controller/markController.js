const fs = require('fs')
const QRCode = require('qrcode')
const path = require('path')

module.exports = {

    index(req,res){
        res.send('Rota para marcar ponto')
    }
}