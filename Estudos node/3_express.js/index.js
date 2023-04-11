/* GET = leitura de dados
POST = escrita de dados
PUT = atualização de dados
DELETE = remoção de dados */


const express = require ("express");

//Define uma aplicação backend em Express
//Recursos pré-configurados
const app = express();


//Define um roteamento
//Manipulador de rota
// req = objeto com dados do cliente/solicitante
// res = objeto com dados p/ resposta do servidor
app.get("/", (requisicao, resposta)=>{
    resposta.send("<h1>Batata é top! Batata é Agro!</h1>");
});


//req = requisição do cliente
//res = resposta do servidor
app.get("/teste", (req,res) => { //manipulador de rota
res.send("<p>O que deseja amigo?</p>")
});



//Inicializa a escuta de requisições do servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});
