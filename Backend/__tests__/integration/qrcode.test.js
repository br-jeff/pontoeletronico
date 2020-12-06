const request = require('supertest');
const app = require('../../src/app')

const qrLink =   "data:image/png;base64,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"

const jsonBody = {
    name: "test",
	company: "company",
	cpf :"123",
	pin:"1234"
}

it('should recive link of qrcode',async()=> {
    const response = await 
        request(app)
        .post('/qrcode/generate')
        .send(jsonBody)

   expect(response.body).toEqual( 
        { imageQRLink: qrLink })
    
})


it('should not recive link of qrcode',async()=> {
    const response = await 
        request(app)
        .post('/qrcode/generate')
        .send('jsonBody')

    expect(response.body).toEqual( 
       expect.objectContaining({
            msg: expect.any(String)
       })
   )
})