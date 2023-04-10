/** EXERCÍCIO III: Crie um novo módulo chamado usuarios.js e exporte um array de objetos
 * usuário (nome, email e senha). Crie um novo módulo login com uma função autenticar,
 * ela deve receber email e senha e verificar se estes dados são válidos de acordo com o * array do módulo de usuários (utilize find, filter o etc). Mostrar uma mensagem se são * válidos ou não.
 */

const usuarios = [
    {
    nome:"Renata Rabelo",
    email:"renata@email.com",
    senha: 123456789
},

{
    nome:"José Almir",
    email:"josealmir@email.com",
    senha: 987654321
},

{
    nome:"Gabriel Braga",
    email:"gabrielbraga@email.com",
    senha: 0987654432
},

{
    nome:"Maria Dias",
    email:"mariadias@email.com",
    senha: 01234567
}
]

module.exports = usuarios;