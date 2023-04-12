const http = require("http");
const os = require("os");
const CPF = require("cpf")

const host = "localhost";
const porta = 3000;

const arquitetura = os.arch();
const plataforma = os.platform();
const versao = os.version();
const tipo = os.type();
const ram = os.totalmem();
const cpu = os.cpus().length;

const geradorCPF = CPF.generate();




/** EXERCÍCIO VI: Escreva na resposta do servidor informações sobre
 * o sistema usando o módulo os.
 * EXERCÍCIO VII: Instale o pacote cpf, e na resposta escreva
 * um cpf aleatório.
 */



const servidor = http.createServer((requisicao, resposta)=>{
    console.log("Requisição Ocorreu");
    //O que eu quero responder para quem fez a solicitação
    resposta.write("<h1>Meu Pc da Xuxa</h1>");
    resposta.write(`<h4><b> Meu pc : ${arquitetura} <br> Minha plataforma :${plataforma} <br> Sua versao: ${versao} (realmente esse, porque nao aguenta o 11)<br> Sou um: ${tipo} <br> A RAM de ${ram} bytes <br> Total de cpus: ${cpu} </h4> <br> <br> <br> `);


    resposta.write("<h1>CPF Terror da receita federal</h1>");
    resposta.write(`<h4><b> ${geradorCPF}`);

    //Encerra a comunicação
    resposta.end();
});

//Servidor fica esperando requisições

servidor.listen(porta, host);

//SERVIDOR HTTP

// - NÃO TEM ROTAS

// NÃO TEM CODIFICAÇÃO UTF-8

// NÃO TEM ESTRUTURA MAIS MINIMALISTA

// MAIS BRAÇAL

//Express.js = Framework para backend