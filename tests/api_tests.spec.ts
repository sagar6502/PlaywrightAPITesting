import {test, expect} from '@playwright/test';

test('API POST Request', async({request}) => {
    const response = await request.post('https://reqres.in/api/users',{
        data:{
            "name":"Sagar",
            "job":"learner"
        }
    })

    expect(response.status()).toBe(201)
    const text = await response.text()
    expect(text).toContain('Sagar')
    console.log(await response.json())
})

test('API GET Request', async({request}) => {

    const response = await request.get('https://reqres.in/api/users?page=2')

    expect(response.status()).toBe(200)

    const text = await response.text()

    expect(text).toContain('Fields')

    console.log(await response.json())


})


test('API PUT Request', async({request}) => {
    const response = await request.put('https://reqres.in/api/users/2',{
        data:{
            "name":"Sunar",
            "job":"learner2"
        }
    })

    expect(response.status()).toBe(200)
    const text = await response.text()
    expect(text).toContain('Sunar')
    console.log(await response.json())
})

test('API DELETE Request', async({request}) => {
    

    expect(response.status()).toBe(204)
})

