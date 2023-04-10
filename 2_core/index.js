/* TIPOS DE MÓDULOS
	- FEITOS PELO DEV
	- CORE (EMBUTIDOS)
	- TERCEIROS (NPM) */


//Core modules = módulos embutidos





console.log(os.arch());// aquitetura(32, 64 ou outro)
console.log(os.type());// windows, linux
console.log(os.platform());
console.log(os.version());
console.log(os.uptime());
console.log(os.freemem());//bytes
console.log(os.totalmem());//bytes
/* console.log(os.cpus().length); */
/* console.log(os.homedir());
console.log(os.hostname());  */


//Módulo operational system (os)
const os = require("os");
//MÓDULO FS - filesystem
const fs = require("fs");

//Escreve o texto em um novo arquivo
fs.writeFileSync("./batata.js", "BATATA É BOM DEMAIS!");

//Lê no console o texto em um novo arquivo
/* fs.readFileSync(arquivo) */
