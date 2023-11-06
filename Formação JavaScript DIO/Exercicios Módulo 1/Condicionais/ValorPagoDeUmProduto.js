/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

const normalPrice = 50;
const conditionPay = 'duas vezes'
let discount = 0;

if (conditionPay === 'à vista débito') {
    discount = 10;
} else if (conditionPay === 'dinheiro ou pix') {
    discount = 15;
} else if (conditionPay === 'duas vezes') {
    discount = 0;
} else if (conditionPay === 'acima de duas vezes') {
    discount = -10;
}

const totalPrice = normalPrice - ((normalPrice * discount) / 100)
console.log ('O Valor total fica por R$' + totalPrice)