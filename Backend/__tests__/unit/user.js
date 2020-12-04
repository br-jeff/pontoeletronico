const User = require('../../src/app/controller/userController')

it('Should create new user',async ()=>{
    const created = await User.createUser('name','123','company')

    expect(created).toBe('ok')

} )

