const request = require('supertest');
const app = require('../../src/app')

it('teste home',async()=> {
    const response = await (request(app).get('/'))
    expect(response.body.msg).toEqual(
        'conexão feita com sucesso'
        )
})
