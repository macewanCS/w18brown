// Some import code was from the following tutorial.
// https://www.youtube.com/watch?v=Fa4cRMaTDUI

console.log('The Caraway Server is running.')

const express = require('express')
const bodyParser = require('body-parser') // process json data easily.
const cors = require('cors') // allows any client around the world to hit the server. security risk.
const app = express() // builds an express server
const pFunctions = require('./functions.js');

//var mysql = require("mysql"); // this has been moved to databaseFunctions.js
var request = require("request-promise");


// code to import functions file 
var databaseFunc = require('./databaseFunctions')
/*
    Note: to use databaseFunctions, use dot notation.
            ex. databaseFunc.checkName(...)
*/










app.use(bodyParser.json())
app.use(cors())

/* 
* This code takes a username and password from the login page and sends the user type.
* integration code
* from client: login
* returns: user type
*/
app.post('/login', async function (req, res) {
    //Checkname is passed username/password and the resolution to redirect the user to the correct page.

    // -- test output -- PLO
    console.log("In app.js file:   username: ", req.body.username, "password: ", req.body.password)

    // calls checkName. Gives it username and password from the login page. Returns type to user.
    let type = await databaseFunc.checkName(req.body.username, req.body.password);

    // -- test output -- PLO
    console.log("In app.js file: type: ", type)

    res.send(type)
})

/*
----------------------------
    Returns a array with this format:
    block1_start, block1_end, block2_start, block2_end, block3_start, block3_end, Year start, weekly_requirements
    Ex.  
    [
    "08:45:00",
    "12:00:00",
    "11:50:00",
    "13:00:00",
    "12:50:00",
    "15:45:00",
    "2018/09/05",
    "05:00:00"
    ]
*/
app.get('/getSettings', async function (req, res) {
    let settings = await pFunctions.getSettings();
    res.send(settings);
})

/* checkName - this function checks whether a username/password combo is in the database and 
* returns their account type if found.
* 
* returns: promise containing account type
*//*
async function checkName(name, password) {
    return new Promise(function (fulfill, reject) {

        // creates a connection to the database saved in the con variable.
        var con = mysql.createConnection({
            host: "localhost",
            user: "browncar",
            password: "brown",
            database: "caraway"
        });

        // sql query code
        con.connect(function (err) {
            if (err) throw err;
            // ? is like %s in C. 
            var sql = "SELECT * FROM account WHERE accountID = ? and password = ?";
            // this array gives order. name is the first ?, password is the 2nd ?
            con.query(sql, [name, password], function (err, result, fields) {
                if (err) throw err;
                if (result.length === 0) {
                    fulfill("incorrect");

                    // -- test output -- PLO
                    console.log("checkName function. user not found in database.")

                }
                else {
                    fulfill(result[0].type); // this returns account type

                    // -- test output -- PLO
                    console.log("checkName function. User found with type: ", result[0].type)
                }
            });
        });
    })
};*/

app.listen(8081)