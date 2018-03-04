// Some import code was from the following tutorial.
// https://www.youtube.com/watch?v=Fa4cRMaTDUI

console.log('hello')

const express = require('express')
const bodyParser = require('body-parser') // process json data easily.
const cors = require('cors') // allows any client around the world to hit the server. security risk.
const app = express() // builds an express server

var mysql = require("mysql");
var request = require("request-promise");

app.use(bodyParser.json())
app.use(cors())

//When posted information to "/login", do this.
//must be an async function to call await on a function inside.
app.post('/login', async function (req, res) {
    //Checkname is passed username/password and the resolution to redirect the user to the correct page.

    console.log("In app.js file:   username: ", req.body.username, "password: ", req.body.password)

    //type is assigned the 'fulfill' within a promise.
    let type = await checkName(req.body.username, req.body.password);

    console.log("In app.js file: type: ", type)

    // This is all that was needed to fix login issue!
    res.send(type)
})

//this function checks whether a username/password combo is in the database.
//Return: Promise containing account type.
async function checkName(name, password) {
    return new Promise(function (fulfill, reject) {
        var con = mysql.createConnection({
            host: "localhost",
            user: "browncar",
            password: "brown",
            database: "caraway"
        });

        con.connect(function (err) {
            if (err) throw err;
            // ? is like %s in C. 
            var sql = "SELECT * FROM account WHERE accountID = ? and password = ?";
            // this array gives order. name is the first ?, password is the 2nd ?
            con.query(sql, [name, password], function (err, result, fields) {
                if (err) throw err;
                if (result.length === 0) {
                    fulfill("incorrect");
                    console.log("app.js file. no matching users found.")
                }
                else {
                    fulfill(result[0].type); // this returns account type

                    console.log("app.js file. matching user found. Type is", result[0].type)
                }
            });
        });
    })
};

// to use later
/* AuthenticationService.login({
    account: 'some text',
    password: 'some text'
}) */


app.listen(8081)