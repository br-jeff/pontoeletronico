const admUser = require('../../src/app/models/AdmUser')
const bcrypt = require('bcryptjs');
require('dotenv').config();

it('should test encrypt password ',async ()=> {
    const adm = await admUser.create({
        user: 'test',
        password: '123',
        company: 'ABC'
    })
    let key = process.env.BRCYPT_KEY
    const compareHash = await bcrypt.compareSync(key,adm.password_hash)
    expect(compareHash).toBe(true)
})

it('should not encrypt with wrong key ',async ()=> {
    const adm = await admUser.create({
        user: 'test',
        password: '123',
        company: 'ABC'
    })
    const compareHash = await bcrypt.compareSync('1',adm.password_hash)
    expect(compareHash).toBe(false)
})
