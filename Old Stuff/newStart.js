var mysql = require('mysql');
var request = require("request-promise");

const port = 8080;
const path = __dirname + "/Public/";

//Webpage variables
var successfulLogin = false;

//node/express variables
const express = require("express");
var app = express();
var bodyParser = require("body-parser"); //Parser, however has troubles with multipart forms
/*-------------*/

app.use(express.static('public'));

//If the app is asked to get '/', sendFile(html/css/picture file)
app.get("/", function (req, res) {
    res.sendFile(path + "login.html");
})
app.get("/admin", function (req, res) {
    res.sendFile(path + "admin.html");
}) 
app.get("/account", function (req, res) {
    res.sendFile(path + "account.html");
})
app.get("/settings", function(req, res) {
    res.sendFile(path + "settings.html");
})
app.get("/rooms,", function (req, res){
    res.sendFile(path + "rooms.html");
})

//Sends the form information to req.body so we can access it later
app.use(bodyParser.urlencoded({ extended: true }));

//When posted information to "/login", do this.
//must be an async function to call await on a function inside.
app.post('/login', async function (req, res) {
    //Checkname is passed username/password and the resolution to redirect the user to the correct page.

    //type is assigned the 'fulfill' within a promise.
    let type = await checkName(req.body.username, req.body.password);
    if (type === "admin"){
        res.redirect("/admin");
    }
    if (type === "incorrect"){
        res.send("incorrect username/password combo");
    }

    //Comment out the lines above and uncomment the below for us without mySQL installed.
    //res.redirect("/admin");

})

app.listen(port, function() {
    console.log("Listening on 8080");
});

//this function checks whether a username/password combo is in the database.
//Return: Promise containing account type.
async function checkName(name, password){
    return new Promise(function (fulfill, reject){
        var con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "brown",
              database: "carraway"
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