# PlaywrightAPITesting
Learning Playwright API Testing


API testing
Introduction
Playwright can be used to get access to the REST API of your application.

Sometimes you may want to send requests to the server directly from Node.js without loading a page and running js code in it. A few examples where it may come in handy:

Test your server API.
Prepare server side state before visiting the web application in a test.
Validate server side post-conditions after running some actions in the browser.
All of that could be achieved via APIRequestContext methods.

Writing API Test
APIRequestContext can send all kinds of HTTP(S) requests over network.


How to run a GET API Request

Step 1 - Add imports --> import {test, expect} from '@playwright/test' 

Step 2 -  Create a test using request context --> async({request})

Step 3 - Send a GET Request & store response in a variable --> 
                    const response = await request.get('https://reqres.in/api/users?page=2')

Step 4 - Verify the status code of the response is 200 -- > expect(response.status()).toBe(200)

Step 5 - Check response contains some text
            const text = await response.text()
             expect(text).toContain('Fields')

Step 6 - Write response on the console
            console.log(await response.json())

Step 7 - Run and check results
            npx playwright test --ui


How to run a POST API Request
Step 1 - Send a POST Request & store response in a variable --> 
                    const response = await request.post('https://reqres.in/api/users',{
                                     data:{
                                    "name":"Sagar",
                                    "job":"learner"
                                }
                            })

Step 2 - Verify response status code is 201

Step 3 - Check response contains some text

How to run a PUT API Request
Step 1 - Send a PUT Request & store response in a variable --> 
                     const response = await request.put('https://reqres.in/api/users/2',{
                                        data:{
                                            "name":"Sunar",
                                            "job":"learner2"
                                        }
                                    })

Step 2 - Verify response status code is 200

Step3 - Check response contains some text


How to run a DELETE API Request
Step 1 - Send a delete Request & store response in a variable --> 
                     const response = await request.delete('https://reqres.in/api/users/2')
Step 2 - Verify response status code is 204
