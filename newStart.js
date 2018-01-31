const port = 8080;
const path = __dirname + "/Public/";

const express = require("express");
var app = express();
var bodyParser = require("body-parser");

/*-------------*/

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

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/login', function (req, res) {
    res.send("Username: " + req.body.username + "\nPassword: " + req.body.password);
})

app.listen(port, function() {
    console.log("Listening on 8080");
});
  