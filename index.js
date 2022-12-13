var express = require("express");
var app = express();
var {produto} = require("./models");
var cors =require('cors');

app.use(cors());

app.use (express.json());
app.use (express.urlencoded({
    extended: true
}))

app.listen(3007, function(){
    console.log("eba");
});

app.get("/", async function (req,res){
    try{
        const resultado = await produto.findAll();
        res.json(resultado)
    }catch (error) {
        console.log(error)
    }
});

app.get("/produto/:id", async function(req, res){
    const resultado = await produto.findByPk(id);
    res.json(resultado)
})

app.post("/", async function (req,res){
    const resultado = await produto.create(req.body);
    res.json(resultado)
});

app.delete("/produto/:id",async function(req, res){
    var resultado = await produto.destroy({where : {id:req.params.id}});
    res.json(resultado)
});

