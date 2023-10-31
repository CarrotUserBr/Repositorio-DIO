//Variáveis
let Vitorias = 100
let Derrotas = 50
let Rank = ""
let saldo = SaldoVD (Vitorias, Derrotas)

//Funções
function SaldoVD (V,D) {
    let saldovd = (V - D)
    return saldovd
}

function Ranking() {
    if (saldo <= 10){
        Rank = "Ferro"
    } else if ((saldo > 10) && (saldo <= 20)){
        Rank = "Bronze"
    } else if ((saldo > 20) && (saldo <= 50)){
        Rank = "Prata"
    } else if ((saldo > 50) && (saldo <= 80)) {
        Rank = "Ouro"
    } else if ((saldo > 80) && (saldo <= 90)){
        Rank = "Diamante"
    } else if ((saldo > 90) && (saldo<= 100)){
        Rank = "Lendário"
    } else if (saldo >100){
        Rank = "Imortal"
    }
}

//Script
Ranking()
console.log ("O Herói tem de saldo " + saldo + " está no nível " + Rank)