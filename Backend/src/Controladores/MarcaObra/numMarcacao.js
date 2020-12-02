const numMarcacao = require('../../ModelosTabela/PontoEletronico/Obra/numMarcacao')


module.exports = {
    async listaMarcacao(req,res){
      const { idFunc, numMarca } = req.params
      res.json({'id':idFunc,'marca':numMarca})
    },

    }