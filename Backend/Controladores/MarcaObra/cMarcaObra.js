const {eVazio} = require('../../FuncaoGlobal/objetos/eVazio')
const {nVazio} = require('../../FuncaoGlobal/objetos/nVazio')
const {atualizaMarca} = require('./funcoes/atualizaMarca')
const mNumMarca = require('../../ModelosTabela/PontoEletronico/Obra/numMarcacao')
const mMarcaObra = require('../../ModelosTabela/PontoEletronico/Obra/marcaObra')
const marca = mMarcaObra.marcacoes
const numMarcacao = mNumMarca.numMarca

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
                /*const novaMarca = await marca.create({
                    idFunc,
                    dia,
                    marca1: horaMarcacao })
                    */


                    const numMarca = await numMarcacao.create({
                        idMarca : 3, //novaMarca.dataValues.id,
                        marca : 1
                        }).catch(err=> console.log(err)) 
                }
                
                criaMarca()
               
            
                
            res.json('Marcação Criada')}
            else
            {   //já existe marcação entao atualiza
            let id = marcacoes[0].id
            let mensagem = ''

            for(var i = 8 ; i > 2 ; i--) {
               // if(eVazio(procuraMarca(i,id))) {
                    atualizaMarca(i,horaMarcacao,id)
                    mensagem += 'marca '
                //}
            }

            res.json(mensagem)
            }
    }
}