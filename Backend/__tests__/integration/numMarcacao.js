const request = require('supertest');
const app = require('../../app')

it('teste home',async()=> {
    const response = await (request(app).get('/'))
    expect(response.body.message).toEqual('conexão feita com sucesso')
})
