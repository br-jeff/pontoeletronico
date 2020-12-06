module.exports = {

    index(req,res){
        try{
            const {mark,cpf } = req.body
            if(!mark || !cpf) 
             return res.json({msg: 'Precisa enviar um json contendo mark e cpf'})
            
            
           return res.jsn({msg :'Rota para marcar ponto'})
     
        }
        catch(err){
            return res.json('erro ao tentar fazer marcação' + err)
        }
    }
}