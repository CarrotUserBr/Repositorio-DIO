// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50;

const numberInitial = 10;
const numberFinal = 50;


for (let i = numberInitial; i <= numberFinal; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}