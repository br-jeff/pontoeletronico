const admUser = require('../../src/app/models/AdmUser')
const bcrypt = require('bcryptjs');
require('dotenv').config();

it('should use compare hash inside of model',async ()=> {
    const adm = await admUser.create({
        user: 'test',
        password: '123',
        company: 'ABC'
    })
    
    const checkPassword = await adm.checkPassword(adm.password)
    expect(checkPassword).toBe(true)
})


it('should not be the same password ',async ()=> {
    const adm = await admUser.create({
        user: 'test',
        password: '1234',
        company: 'ABC'
    })
    
    const checkPassword = await adm.checkPassword('12345')
    expect(checkPassword).toBe(false)
})