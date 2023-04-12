/* GET - Leitura de dados/infos
POST - Enviar dados
Corpo(body) - json
PUT-ATUALIZA
PATCH - ATUALIZAÇÃO PARCIAL
DELETE - REMOÇÃOS
*/

/* Postman - mandar um corpo - body -> raw -> json */

const express = require("express");

/* configuração do app */
const app = express();
app.use(express.json()); //Lê o body no formato JSON
/* Quando se trata de post, essa linha é imprescindível */

//Rotas
app.post("/enviar", (req, res) => {
  //req. body representa os dados enviados no corpo
  //da requisição post
  /* console.log(req.body); */
  const { nome, email, senha, frutasFavoritas } = req.body;
  res.json(`Recebido: ${nome}, ${email}, ${senha}, ${frutasFavoritas} `);
});

//IMC/Calcular
app.post("/imc", (req, res) => {
  const { peso, altura } = req.body;
  if((peso !== undefined) && (altura !== undefined)){
    const imc = peso / altura ** 2
    res.json({resultado: imc})
  }else{
res.status(400).json({message: "Dados inválidos para calcular"})
  }
});

//Escuta das requisições
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/");
});
