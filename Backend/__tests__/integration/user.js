const request = require('supertest');
const app = require('../../src/app')

const createJson = {
    name: "test",
	company: "company",
	cpf :"123",
	pin:"1234"
}

it('teste home',async()=> {
    const response = await 
        request(app)
        .post('/adm/user/create')
        .send(createJson)

   expect(response.body).toEqual( 
    expect.objectContaining({
        name: expect.any(String),
        cpf: expect.any(String),
        company: expect.any(String),
        pin: expect.any(String),
    })
    )
})

