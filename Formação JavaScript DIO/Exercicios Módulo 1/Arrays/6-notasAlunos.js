//6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
//   Ex de lista de notas = [2, 7, 3, 8, 10, 4]

const notas = [2, 7, 3, 8, 10, 4]
let maiorNota = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > maiorNota) {
        maiorNota = notas[i]
    }
}
console.log(maiorNota)