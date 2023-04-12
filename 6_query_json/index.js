const express = require("express");
const fs = require("fs");
const app = express();

//Params = mais restrito à URL.
//Query = mais flexível, suja mais a URL - ex: cpfs?numero=5
//Query tem o propósito maior de filtragem de dados

//Query consulta
app.get("/youtube", (req, res) => {
  // const canal = req.query.canal;
  const { canal, video, r } = req.query;
  res.send(`Canal: ${canal}, Vídeo: ${video}, Resolução: ${r}`);
});

// Exercício I: Crie uma rota que receba um parâmetro query `nome` e retorne uma mensagem de boas-vindas personalizada. Se `nome` não for fornecido, exiba uma mensagem de erro.

app.get("/nome", (req, res) => {
  // const canal = req.query.canal;
  const { nome } = req.query;

  if (nome) {
    res.send(`Bem vindo: ${nome}!`);
  } else {
    res.status(400).send(`Envie o nome corretamente!`);
  }
});

/* http://localhost:3000/nome?nome=Renata+Rabelo */

// Exercício II: Crie uma rota que receba dois parâmetros query, `num1` e `num2`. Retorne como resposta a soma dos números (se os dois numeros não forem fornecidos mostrar uma mensagem de erro).
app.get("/soma", (req, res) => {
  const { num1, num2 } = req.query;

  if (num1 !== undefined && num2 !== undefined) {
    const soma = Number(num1) + Number(num2);
    res.send(`A soma dos números é : ${soma}.`);
  } else {
    res.status(400).send(`Você não forneceu um número!`);
  }
});

/* http://localhost:3000/soma?num1=200&num2=50 */

// Exercício III: Crie uma rota que receba um parâmetro query, `lang` e exiba uma mensagem de boas vindas no idioma (português ou inglês). Caso a linguagem não seja fornecida ou suportada exiba uma mensagem de erro.
app.get("/boasvindas", (req, res) => {
  const { lang } = req.query;

  if (lang === "pt-br") {
    res.send("Bem vindo!");
  } else if (lang === "en") {
    res.send("Welcome!");
  } else {
    res.status(400).send("Idioma não suportado!");
  }
});

/* http://localhost:3000/boasvindas?lang=jp */

const usuarios = require("./usuarios");

app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

app.get("/usuarios/:index", (req, res) => {
   const index = Number(req.params.index);
   const usuarioEncontrado = usuarios[index];
   //tratar ausência de usuário

   if(usuarioEncontrado){
    res.json(usuarioEncontrado)
   }else{
    res.status(404).send("Não encontrado!")
   }
  });




app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});
