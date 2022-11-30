var express = require("express");
var app = express();
var {autores} = require("./models");
var {livros} = require("./models");

app.use (express.json());
app.use (express.urlencoded({
    extended: true
}))

app.listen(3007, function(){
    console.log("eba");
});