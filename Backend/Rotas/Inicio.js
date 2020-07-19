const express = require('express');
const routes = express.Router();

routes.get('/', (req,res) => { res.send('Rota inicial roteada')})

module.exports = routes;