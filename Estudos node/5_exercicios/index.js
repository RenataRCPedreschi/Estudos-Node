
// Exercício I: Crie uma calculadora IMC (/imc), receba via parâmetros
// fixos, um peso e uma altura (converter p/ number). E responde
// com o resultado do cálculo.

// Exercício II: Na rota /funcionarios/:cpf, valide o cpf passado
// pelo cliente. Se for válido responda positivamente (200), caso contrário
// responda negativamente (400).

// Exercício III: Crie uma rota /cpfs/:numero. E responde com a quantidade de
// cpfs aleatórios solicitada.




const express = require ("express");
const fs = require ("fs")
const CPF = require("cpf")
const app = express();



app.get("/imc/:peso/:altura", (req, res)=>{
    const peso = Number(req.params.peso);
    const altura = Number(req.params.altura);

    const imc = peso / (altura ** 2);

    res.send(`<p>IMC: ${imc.toFixed(2)}</p>`)

});



app.get("/funcionarios/:cpf", (req, res) => {
    const { cpf } = req.params;
    if(CPF.isValid(cpf)){
        res.status(200).send("<p>O CPF é válido!</p>")
    }else{
        /* 400 = cliente manda informação inválida */
        res.status(400).send("<p>O CPF é inválido!</p>")

    }

    

    res.send(`Funcionário encontrado: ${cpf}`);
});



app.get("/cpfs/:numero", (req, res) => {
   const numero = Number(req.params.numero);
   for(let i = 0; i< numero; i++){
    res.write(`<p>${CPF.generate()}</p>`)
   }
    
})



app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
