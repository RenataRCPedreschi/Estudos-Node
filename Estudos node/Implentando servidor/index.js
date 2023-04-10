const http = require("http");

const host = "localhost";
const porta = 3000;


const servidor = http.createServer((requisicao, resposta)=>{
    console.log("Requisição Ocorreu");
    //O que eu quero responder para quem fez a solicitação
    resposta.write("<h1>Hello, World!</h1>");
    resposta.write("<p>TESTE!</p>");
    //Encerra a comunicação
    resposta.end();
});

//Servidor fica esperando requisições

servidor.listen(porta, host);