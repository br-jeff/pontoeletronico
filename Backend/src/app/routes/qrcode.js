const express = require('express');
const routes = express.Router();
const qrController = require('../controller/qrcodeController');

routes.post('/qrcode/generate', qrController.generate)
routes.post('/qrcode/read',qrController.read)

module.exports = routes;