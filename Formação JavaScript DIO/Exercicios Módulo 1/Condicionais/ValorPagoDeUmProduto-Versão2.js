/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const normalPrice = 100;
const conditionPay = 2;
let discount = 0;

switch (conditionPay) {
    case 1: 
        discount = 10;
        break
    case 2: 
        discount = 15;
        break
    case 3: 
        discount = 0;
        break
    case 4: 
        discount = -10;
        break
}

const totalPrice = normalPrice - ((normalPrice * discount) / 100)
console.log ('O Valor total fica por R$' + totalPrice)