const express = require('express');
const routes = express.Router();
const qrController = require('../controller/qrcodeController')

routes.post('/qrcode/generate', qrController.generate)

module.exports = routes;