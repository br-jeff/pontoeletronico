const mMarcaObra = require('../../ModelosTabela/PontoEletronico/Obra/marca_obra')
const marca = mMarcaObra.marcacoes

async function atualizaMarca(numMarca,horaMarcacao,id){
    if(numMarca == 1) {
        const atualiza = await marca.update(
            {
                marca1: horaMarcacao
            },
                { where: { id: id } })
        }
    if(numMarca == 2) {
        const atualiza = await marca.update(
            {
                marca2: horaMarcacao
            },
                { where: { id: id } })
        }
    if(numMarca == 3) {
        const atualiza = await marca.update(
            {
                marca3: horaMarcacao
            },
                { where: { id: id } })
        }
    if(numMarca == 4) {
        const atualiza = await marca.update(
            {
                marca4: horaMarcacao
            },
                { where: { id: id } })
        }
    if(numMarca == 5) {
        const atualiza = await marca.update(
            {
                marca5: horaMarcacao
            },
                { where: { id: id} })
        }
    if(numMarca == 6) {
        const atualiza = await marca.update(
            {
                marca6: horaMarcacao
            },
                { where: { id: id} })
        }
    if(numMarca == 7) {
        const atualiza = await marca.update(
            {
                marca7: horaMarcacao
            },
                { where: { id: id} })
        }
    if(numMarca > 7) {
        const atualiza = await marca.update(
            {
                marca8: horaMarcacao
            },
                { where: { id: id} })
        }
    };


module.exports = {atualizaMarca}