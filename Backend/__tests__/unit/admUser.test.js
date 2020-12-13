const admUser = require('../../src/app/models/AdmUser')
const jwt = require('jsonwebtoken')
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

it('verify json web token ',async ()=> {
    const adm = await admUser.create({
        user: 'test',
        password: '1234',
        company: 'ABC'
    })

    const token = adm.generateToken()
    const key = process.env.JWT_KEY

    let verify = jwt.verify(token,key)

    expect(verify.id).toBe(adm.id)
    
})

it('json not be same id web token ',async ()=> {
    const adm = await admUser.create({
        user: 'test',
        password: '1234',
        company: 'ABC'
    })

    const token = adm.generateToken()
    const key = process.env.JWT_KEY

    let verify = jwt.verify(token,key)

    expect(verify.id).not.toBe(adm.id + 1)
    
})