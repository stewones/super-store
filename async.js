// execução asincrona

somar(1, 2).then((soma) => {

    console.log('resultado da soma é: ', soma);

    dividir(10, 2).then((divisao) => {

        console.log('resultado da divisão é: ', divisao);

    });

});

function somar(a, b) {

    return new Promise((resolve, reject) => {
        resolve(a + b);
    })
}

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        resolve(a / b);
    })
}