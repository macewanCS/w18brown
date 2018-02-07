var mysql = require('mysql');

const port = 8080;
const path = __dirname + "/Public/";

//Webpage variables
var successfulLogin = false;

//node/express variables
const express = require("express");
var app = express();
var bodyParser = require("body-parser"); //Parser, however has troubles with multipart forms
/*-------------*/

//If the app is asked to get '/', sendFile(html/css/picture file)
app.get("/", function (req, res) {
    res.sendFile(path + "index.html");
})
app.get("/admin", function (req, res) {
    res.sendFile(path + "admin.html");
})
app.get("/Stylesheets/login.css", function (req, res) {
    res.sendFile(path + "Stylesheets/login.css");
})
app.get("/Stylesheets/admin.css", function (req, res) {
    res.sendFile(path + "Stylesheets/admin.css");
})
app.get("/account", function (req, res) {
    res.sendFile(path + "account.html");
})

//Sends the form information to req.body so we can access it later
app.use(bodyParser.urlencoded({ extended: true }));

//When posted information to "/login", do this.
app.post('/login', function (req, res) {
    //Checkname is passed username/password and the resolution to redirect the user to the correct page.
    checkName(req.body.username, req.body.password, res);
})

app.listen(port, function() {
    console.log("Listening on 8080");
});

//this function checks whether a username/password combo is in the database.
//Return: account type (string)
function checkName(name, password, res){
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
              res.send("incorrect username/password combo");
              return;
          }
          if (result[0].type === "admin"){
                res.redirect("/admin");
          }
      });
    });
}
