const express = require("express");
const fs = require("fs");
const app = express();

const usuarios = require("./usuarios");

app.get("/usuarios/email/:email", (req, res) => {
    const {email} = req.params; //parâmento de rota
    const usuarioEncontrado = usuarios.find((el) => el.email ===email);

    if(usuarioEncontrado){
        res.json(usuarioEncontrado);
    }else{
        res.status(404).json({message: "Usuário não encontrado!"})
    }
})

app.get("/usuarios/novo", (req, res) => {
    const {nome, email} = req.query;
    const novoUsuario = {nome: nome, email: email};
    usuarios.push(novoUsuario);
    res.status(201).json({message: "Usuário Adicionado"})
})




app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
  });