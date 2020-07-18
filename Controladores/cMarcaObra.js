const mMarcaObra = require('../ModelosTabela/PontoEletronico/Obra/marca_obra')
const marca = mMarcaObra.marcacoes

module.exports = {
    async listaMarcacao(req,res){
        const lista = await marca.findAll()
        .then(event => res.json(event))
        .catch(err => res.json(err))
    },

    async criaMarcacao(req,res){
        const { idfunc, dia } = req.body
        const Marcacao = await marca.create({ idfunc, dia })
        res.json(Marcacao)
    },
    
    async updateMarcacao(req,res) {
        let hoje = new Date()
        let horaMarcacao = hoje.getHours()+":"+hoje.getMinutes()
        const {id , dia} = req.param
        //const Marcacao = await marca.create({ idfunc, dia })
        //Marcacao.marca1 =
        marca.find({ where: { idfunc = id } })
        .on('success', function (marca) {
        // Check if record exists in db
        if (marca) {
        marca.update({
        marca1: horaMarcacao
        })
      .success(function () {})
        }
  })
        res.json(horaMarcacao)
    }
}