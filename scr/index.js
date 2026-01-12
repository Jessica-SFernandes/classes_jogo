class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Donatello", 16, "Mago");
const heroi2 = new Heroi("Leonardo", 16, "Guerreiro");
const heroi3 = new Heroi("Michelangelo", 15, "Monge");
const heroi4 = new Heroi("Raphael", 15, "Ninja");

const grupoDeHerois = [heroi1, heroi2, heroi3, heroi4];

console.log("--- Início da Batalha ---");
for (const heroi of grupoDeHerois) {
    heroi.atacar();
}