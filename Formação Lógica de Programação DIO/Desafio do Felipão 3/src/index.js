//Classe Herói
class hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    
    attack (){
        let attackHero = ""
        switch (typeHero) {
            case ("Warrior"):
                attackHero = "sword"
            break
            case ("Mage"):
                attackHero = "magic"
            break
            case ("Monk"):
                attackHero = "martial arts"
            break
            case ("Ninja"):
                attackHero = "shuriken"
        }
        console.log (`The ${typeHero} attacked using ${attackHero}!`)
    }
}

//Declaração de Váriaveis
let nameHero = "Carrot"
let ageHero =  28
let typeHero = "Ninja"

//Código
let heroOne = new hero (nameHero, ageHero, typeHero)
heroOne.attack()