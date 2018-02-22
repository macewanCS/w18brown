var mysql = require('mysql');
var request = require("request-promise");

const express = require("express");
const bodyParser = require("body-parser");

const port = 8080;

var app = express();

//Sends the form information to req.body so we can access it later
app.get("/", function (req, res) {
    res.send({
        message: "test"
    })    
})

app.use(bodyParser.urlencoded({ extended: true }));


app.listen(port, function() {
    console.log("Listening on 8080");
});
/*
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
}*/