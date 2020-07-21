const {eVazio} = require('../../FuncaoGlobal/objetos/eVazio')
const {atualizaMarca} = require('./funcoes/atualizaMarca')
const {procuraMarca} = require('./funcoes/procuraMarca')
const mMarcaObra = require('../../ModelosTabela/PontoEletronico/Obra/marca_obra')
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
        const hoje = new Date()
        const mes = hoje.getMonth() + 1
        const dia = new Date(hoje.getFullYear()+'-'+mes+'-'+hoje.getDate())
        const horaMarcacao = hoje.getHours()+":"+hoje.getMinutes()
        const idFunc = req.params.idFunc
        let marcacoes

        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                dia,
                idFunc,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcações'))

        //res.json(marcacoes)

        if (eVazio(marcacoes)) {
            async function criaMarca(){
                const novaMarca = await marca.create({
                    idFunc,
                    dia,
                    marca1: horaMarcacao })
            }
            criaMarca()
            res.json('Marcação Criada')}
            else
            {   //já existe marcação entao atualiza
            let id = marcacoes[0].id

                for (var i = 8; i > 0; i--) {
                    if(eVazio(procuraMarca(i,id))) {
                        atualizaMarca(i,horaMarcacao,id)
                        res.json('marca'+i) 
                    }

                }
            }
    }
}