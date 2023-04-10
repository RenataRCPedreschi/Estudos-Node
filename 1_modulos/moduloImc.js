//Módulo IMC
//Terá funcionalidades a respeito do cálculo
//CommonJs

function calcularImc(peso, altura){
    return peso / (altura * altura);
}


/** EXERCÍCIO I: Adicione e exporte uma função que recebe um valor de IMC e retorna o nível de acordo com alguma tabela de IMC */

function valorImc(imc){
if(imc < 18.5){
    return "Seu IMC está abaixo do mínimo esperado. Procure um médico.";
}

else if(imc >= 18.5 && imc <= 24.9){
    return "Seu IMC está dentro do esperado.";
}

else if(imc >= 25.0 && imc<= 29.9 ){
    return "Seu IMC está acima do nível esperado, indicando sobrepeso.";
}

else if(imc >= 30.0 && imc <= 39.9 ){
    return "Seu IMC está acima do nível esperado, indicando obesidade. Procure um médico.";
}

else if(imc >= 40.0){
    return "Seu IMC está muito acima do nível esperado, indicando obesidade grave. Procure um médico.";
}

}

//Deste arquivo, irei exportar a função calcularImc valorImc
module.exports = {calcularImc, valorImc};


