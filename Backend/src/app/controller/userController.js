module.exports = {
  
    async createUser(){
        const userCreate = await user.create({
            name: 'test',
            cpf: '123',
            company: 'test'
        })
        return userCreate
    },

    index(req,res){
        res.send('rotaok')
    }
}