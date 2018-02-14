// execução sincrona

let soma = somar(1,2);
let divisao = dividir(10,2);

console.log('resultado da soma é: ', soma);
console.log('resultado da divisão é: ', divisao);

function somar(a, b) {
    return a + b;
}

function dividir(a, b) {
    return a / b;
}