const mMarcaObra = require('../../../ModelosTabela/PontoEletronico/Obra/marca_obra')
const marca = mMarcaObra.marcacoes

async function procuraMarca(numMarca,id){
    let marcacoes
    if(numMarca == 1) {
        const jaMarcou = await marca.findAll({
            attributes: ['id'],
        where: {
                id:id,
                marca1: null,
        }})
        .then(event => marcacoes = event)
        .catch(err => res.json('Erro ao buscar marcação 1'))
    }
    return marcacoes

    };

module.exports = {procuraMarca}