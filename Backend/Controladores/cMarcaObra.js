const mMarcaObra = require('../ModelosTabela/PontoEletronico/Obra/marca_obra')
const marca = mMarcaObra.marcacoes

module.exports = {
    async listaMarcacao(req,res){
        const lista = await marca.findAll()
        .then(event => res.json(event))
        .catch(err => res.json(err))
    },

    async criaMarcacao(req,res){
        const { idFunc, dia } = req.body
        const Marcacao = await marca.create({ idFunc, dia })
        res.json(Marcacao)
    },
    
    async marcaOnline(req,res) {
        const hoje = new Date('2020-07-19')
        let query

        const jaMarcou = await marca.findAll({
            attributes: [
                'id'
            ],
        where: {
                idfunc : 1,
                dia: hoje,
        }})
        .then(event => query = event)
        .catch(err => res.json(err))
        
        
        let horaMarcacao = hoje.getHours()+":"+hoje.getMinutes()
        const {id , dia} = req.param
        res.json(query)
    }
}