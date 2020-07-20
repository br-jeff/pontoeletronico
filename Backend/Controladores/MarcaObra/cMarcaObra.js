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
               if(eVazio(procuraMarca(1,id))) {
                   atualizaMarca(1,horaMarcacao,id)
                   res.json('marca1') }
                else{
                    if(eVazio(procuraMarca(2,id))) {
                        atualizaMarca(2,horaMarcacao,id)
                        res.json('marca') }
                    else{
                        if(eVazio(procuraMarca(3,id))) {
                            atualizaMarca(3,horaMarcacao,id)
                            res.json('marca3') }
                        else{
                            if(eVazio(procuraMarca(4,id))) {
                                atualizaMarca(4,horaMarcacao,id)
                                res.json('marca4') }
                            else{
                                if(eVazio(procuraMarca(5,id))) {
                                    atualizaMarca(5,horaMarcacao,id)
                                    res.json('marca5') }
                                else{
                                    if(eVazio(procuraMarca(6,id))) {
                                        atualizaMarca(6,horaMarcacao,id)
                                        res.json('marca6') }
                                    else{
                                        if(eVazio(procuraMarca(7,id))) {
                                            atualizaMarca(7,horaMarcacao,id)
                                            res.json('marca7') }
                                        else{  
                                            atualizaMarca(8,horaMarcacao,id)
                                            res.json('marca8') 
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }
}