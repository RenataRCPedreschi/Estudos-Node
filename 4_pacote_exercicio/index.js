/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */


const colors = require("colors")
console.log(colors.rainbow("Hello World!") );


/** EXERCÍCIO VI: Crie uma nova pasta (pacote_exercicio) e rode
 * npm init -y. Configure o "start" para "node ./index.js".
 * Instale o pacote colors e utilize este pacote.
 * https://www.npmjs.com/package/colors
 */

/* const colors = require("colors");

const letraCineAsCores = [
    "Cine - As Cores",
    "",
    "O vento bate a porta e não me engana mais",
    "A decoração branca não me satisfaz",
    "Eu queria estar no seu lugar, mas não estou",
    "",
    "Acham que enlouqueci",
    "Perguntam de você pra mim",
    "E eu tento dizer que esta tudo bem",
    "",
    "Estou igual, vivendo o irreal",
    "Perguntei do final, pras flores",
    "As flores, são parte do total",
    "Já se tornou banal",
    "Me sentir mal",
    "Me sinto mal",
    "",
    "As cores lá fora, me disseram pra continuar",
    "Elas me disseram pra continuar",
    "(E eu já superei)",
    "",
    "Mas eu queria suas mãos nas minhas",
    "Revelar as fotos que tiramos e ninguém sabia",
    "Da sua partida (da sua partida)",
    "",
    "E se foi, se jogou num mar aberto de ilusões",
    "E as ondas te acertaram como eu planejei, eu exagerei",
    "",
    "Um sentimento tão forte",
    "Eu sei que tive sorte (aquilo não era o que eu sou)",
    "Agora sei muito bem quem sou",
    "E o que me tornou",
    "",
    "Tão igual, vivendo o irreal",
    "Perguntei do final, pras flores",
    "As flores, são parte do total",
    "Já se tornou banal",
    "Me sentir mal",
    "Me sinto mal",
    "",
    "As cores lá fora, me disseram pra continuar",
    "Elas me disseram pra continuar",
    "(E eu já superei)",
    "",
    "Mas eu queria suas mãos nas minhas",
    "Revelar as fotos que tiramos e ninguém sabia",
    "Dessa sua partida (da sua partida)",
    "",
    "(Tudo que eu penso parece que é você",
    "Eu tento, luto, venço, mas não vou esquecer)",
    "",
    "Tudo o que eu falei",
    "Eu te fazia chorar, não te ouvia falar",
    "Só te peço perdão",
    "Hoje canto pra que ouça",
    "Dos céus que eu não duvidei do amor",
    "",
    "Tão igual, vivendo o irreal",
    "Tão igual, vivendo o irreal",
    "Tão igual, vivendo o irreal",
    "Tão igual, vivendo o irreal"
]

for (let i = 0; i < letraCineAsCores.length; i++) {
    const e = letraCineAsCores[i];
    const rand = Math.floor(Math.random() * 12);

    switch(rand){
        case 0: 
            console.log(colors.black(e));
            break;
        case 1:
            console.log(colors.red(e));
            break;
        case 2:
            console.log(colors.green(e));
            break;
        case 3:
            console.log(colors.yellow(e));
            break;
        case 4:
            console.log(colors.blue(e));
            break;
        case 5:
            console.log(colors.magenta(e));
            break;
        case 6:
            console.log(colors.cyan(e));
            break;
        case 7:
            console.log(colors.white(e));
            break;
        case 8:
            console.log(colors.random(e));
            break;
        case 8:
            console.log(colors.grey(e));
            break;
        case 9:
            console.log(colors.rainbow(e));
            break;
        case 10:
            console.log(colors.zebra(e));
            break;
        case 11:
            console.log(colors.america(e));
            break;
        // case 12:
        //     console.log(colors.trap(e));
        //     break;
        // case 13:
        //     console.log(colors.gray(e));
        //     break;
    }
} */