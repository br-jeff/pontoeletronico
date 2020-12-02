const express = require('express');
const routes = express.Router();

routes.get('/', (req,res) => { 
    res.status(200).json({message:'conexão feita com sucesso'})
})

module.exports = routes;