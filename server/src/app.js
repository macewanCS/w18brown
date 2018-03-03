// Some import code was from the following tutorial.
// https://www.youtube.com/watch?v=Fa4cRMaTDUI

console.log('hello')

const express = require('express')
const bodyParser = require('body-parser') // process json data easily.
const cors = require('cors') // allows any client around the world to hit the server. security risk.
const app = express() // builds an express server

var mysql = require("mysql");
var request = require("request-promise");


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

//When posted information to "/login", do this.
//must be an async function to call await on a function inside.
app.post('/login', async function (req, res) {
    //Checkname is passed username/password and the resolution to redirect the user to the correct page.

    //type is assigned the 'fulfill' within a promise.
    let type = await checkName(req.body.username, req.body.password);
    if (type === "admin") {
        res.send("Correct username/password");
    }
    if (type === "incorrect") {
        res.send("false");
    }

    //Comment out the lines above and uncomment the below for us without mySQL installed.
    //res.redirect("/admin");

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
                    //this wont work, needs to be different.
                    fulfill("incorrect");
                }
                else {
                    fulfill(result[0].type);
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