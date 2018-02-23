// Some import code was from the following tutorial.
// https://www.youtube.com/watch?v=Fa4cRMaTDUI

console.log('hello')

const express = require('express')
const bodyParser = require('body-parser' ) // process json data easily.
const cors = require('cors') // allows any client around the world to hit the server. security risk.

const app = express() // builds an express server
// app.use(morgan('combined)) // not currently installed.
app.use(bodyParser.json())
app.use(cors()) 

// end points

// example format:
/* app.get('/status', (req, res) => {
    res.send({
        message: "hello world!"
    })
}) */

app.post('/login', (req, res) => {
    res.send({
        message: 'login attempted for ${req.boy.account}' //not sure why the ${} syntax doesnt work.
    })
})

// to use later
/* AuthenticationService.login({
    account: 'some text',
    password: 'some text'
}) */


app.listen(8081)