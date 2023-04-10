let usuarios = ("./moduloUsuarios.js");

function autenticar(email, senha){
    const usuario = usuarios.find(elemento =>email === elemento.email && senha === elemento.senha)
    if(usuario){
        return "Deu certo"
    }else{
        return "Usuario não encontrado"
    }
}






module.exports = autenticar;