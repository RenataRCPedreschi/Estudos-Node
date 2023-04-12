const express = require ("express");
const fs = require ("fs")
const CPF = require("cpf")
const app = express();



app.get("/", (req, res)=>{
   const arquivo =  fs.readFileSync("./inicio.html")
   res.send(arquivo.toString());
});


app.get("/ajuda", (req,res) => { 
    const arquivo =  fs.readFileSync("./ajuda.html")
    res.send(arquivo.toString());
});


app.get("/funcionarios/:cpf", (req, res) => {
    // req.params = guarda todos os parametros de rota
    // const cpf = req.params.cpf
    const { cpf } = req.params;
    res.send(`Funcionário encontrado: ${cpf}`);
});
app.get("/pessoas/:nome/:empresa", (req, res) => {
    const { nome, empresa } = req.params;
    res.send(`${nome}, ${empresa}`)
})



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
