const express = require("express");
const Router = require("./router");

let app = express();
Router.init(app);

app.listen("8080", () => {
    console.log("Listening on 8080");
});