/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = (this.peso / Math.pow(this.altura, 2))
    }
    
    calcularImc() {
        return (this.peso / Math.pow(this.altura, 2)).toFixed(2)
    }

    classificarImc() {
        if (this.imc < 18.5) {
            console.log ('Abaixo do Peso');
        } else if (this.imc >= 18.5 && this.imc < 25) {
            console.log ('Peso Normal');
        } else if (this.imc >= 25 && this.imc < 30) {
            console.log ('Acima do Peso');
        } else if (this.imc >= 30 && this.imc < 40) {
            console.log ('Obeso');
        } else if (this.imc > 40) {
            console.log ('Obesidade Grave');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75)
console.log(jose.calcularImc())
jose.classificarImc()