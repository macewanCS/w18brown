const express = require("express");
const expressVue = require("express-vue");
const bodyParser = require("body-parser");
const API = require("./api");

var mysql = require('mysql');
var request = require("request-promise");

const path = __dirname + "/";


const port = "8080";


// => replaces function() {}
// (app) => { ...} is the same as function(app) {  ...   }
module.exports.init = (app) => {
    const router = express.Router();
    const myString = "<script defer src='https://code.getmdl.io/1.3.0/material.min.js'></script>";

    const expressVueMiddleware = expressVue.init();
    app.use(expressVueMiddleware);
    app.use(router);

    app.get("/", function (req, res) {
        res.sendFile(path + "Login/login.html");
    })

    //Sends the form information to req.body so we can access it later
    app.use(bodyParser.urlencoded({ extended: true }));


    //When posted information to "/login", do this.
    //must be an async function to call await on a function inside.
    app.post('/login', async function (req, res) {
        //Checkname is passed username/password and the resolution to redirect the user to the correct page.

        //type is assigned the 'fulfill' within a promise.
        let type = await checkName(req.body.username, req.body.password);
        if (type === "admin") {
            res.redirect("/admin");
        }
        if (type === "incorrect") {
            res.send("incorrect username/password combo");
        }

        //Comment out the lines above and uncomment the below for us without mySQL installed.
        //res.redirect("/admin");

    })


    //this function checks whether a username/password combo is in the database.
    //Return: Promise containing account type.
    async function checkName(name, password){
        return new Promise(function (fulfill, reject){
            var con = mysql.createConnection({
                host: "localhost",
                user: "browncar",
                password: "brown",
                database: "caraway"
            });
              
            con.connect(function(err) {
                if (err) throw err;
                // ? is like %s in C. 
                var sql = "SELECT * FROM family WHERE familyID = ? and password = ?";
                                // this array gives order. name is the first ?, password is the 2nd ?
                con.query(sql, [name, password], function (err, result, fields) {
                  if (err) throw err;
                  if (result.length === 0){
                      //this wont work, needs to be different.
                      fulfill("incorrect");
                  }
                  else {
                        fulfill(result[0].type);
                  }
              });
            });
        })
    }

    app.use("/admin", (req, res) => {
        const data = {
            title: "Test",
            rooms: myString
        };
        const vueOptions = {
            head: {
                title: "Test"
            },
            scripts: [
                { src: 'https://code.getmdl.io/1.3.0/material.min.js' },
            ],
            layout: {
                body: {
                    start: '<body>',
                    end: myString + '</body>'
                }
            }
        };
        res.renderVue("Vue/main.vue", data, vueOptions);
    });

};