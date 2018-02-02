var mysql = require('mysql');

const port = 8080;
const path = __dirname + "/Public/";

const express = require("express");
var app = express();
var bodyParser = require("body-parser"); //Parser, however has troubles with multipart forms

/*-------------*/

//If the app is asked to get '/', sendFile(html file)
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

//Sends the form information to req.body so we can access it later
app.use(bodyParser.urlencoded({ extended: true }));

//When posted information to "/login", do this.
app.post('/login', function (req, res) {
    res.send("Username: " + req.body.username + "\nPassword: " + req.body.password);
    var type = checkName(req.body.username, req.body.password);
    //I called a function here to open the propr page based on type but turns out I dont know how
})

app.listen(port, function() {
    console.log("Listening on 8080");
});

//this function checks whether a username/password combo is in the database.
//Return: account type (string)
function checkName(name, password){
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
              return "blank";
          }
          else{
                return result[0].type; // type is facilitator, admin, etc.
          }
      });
    });
}
