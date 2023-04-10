//Módulo operational system (os)
const os = require("os");
//MÓDULO FS - filesystem
const fs = require("fs");


const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();
const tipo = os.type();


fs.writeFileSync("./meu pc da xuxa.txt",`Dados pc da Xuxa, ${arquitetura}\n${plataforma}\n${usuario}\n${versao} \n ${tipo} `);
