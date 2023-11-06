/*
1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    KMporL;

    constructor(marca, cor, KMporL) {
        this.marca = marca;
        this.cor = cor;
        this.KMporL = KMporL;
    }

    calcularGasto(distancia, valorCombustivel) {
        return ((distancia / this.KMporL) * valorCombustivel).toFixed(2);
    }
}

const uno = new Carro('Fiat', 'Branco', 20);
console.log(uno.calcularGasto(100, 5));