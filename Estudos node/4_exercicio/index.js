const express = require ("express");
const fs = require ("fs")
const app = express();



app.get("/inicio", (req, res)=>{
   const arquivo =  fs.readFileSync("./inicio.html")
   res.send(arquivo.toString());
});


app.get("/ajuda", (req,res) => { 
    const arquivo =  fs.readFileSync("./ajuda.html")
    res.send(arquivo.toString());
});


app.get("/funcionarios/:cpf", (req, res) => {
    console.log(req.params);
    res.send("Funcionário encontrado!")
})



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
