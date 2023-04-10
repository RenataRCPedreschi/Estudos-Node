const CPF = require("cpf");
const fs = require("fs");


/** EXERCÍCIO V: Crie um arquivo txt com 1000 cpf aleatórios.
 * Desafio: Leia o arquivo e mostre um por um dos 1000 cpf
 * que estão dentro do arquivo.
 */

let numeros = [];
for(let i = 0; i < 1000; i++) {
    numeros.push(CPF.generate());
}

fs.writeFileSync("./CPFgenerator.txt", numeros.join("\n"))
const generatorCPF = fs.readFileSync("./CPFgenerator.txt").toString().split("\n");
for (let cpf of generatorCPF){
    console.log(cpf);
}


