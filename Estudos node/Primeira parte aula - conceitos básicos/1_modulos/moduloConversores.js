/** EXERCÍCIO II: Crie um novo módulo chamado moduloConversores.js e exporte funções que convertem, utilize elas no index usando o require:
 * - celsius para fahrenheit;
 * - fahrenheit para celsius;
 */

function cParaF(c){
    const valorF = (c * (9/5)) + 32;
    return valorF;
}

function fParaC(f){
    const valorC = ((f-32)*(5/9));
    return valorC;
    
}

module.exports = {cParaF, fParaC}