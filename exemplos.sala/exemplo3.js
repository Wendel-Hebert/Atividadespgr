class Carro {
    constructor(marca, ano, pneu) {
        this.marca = marca;
        this.ano = ano;
        this.pneu = pneu;
    }
    
    ligar() {
        console.log(`${this.marca} está ligado!`);
    }

    verificarPneu() { // Nome alterado para evitar conflito
        console.log(`O pneu ${this.pneu} está cheio`);
    }
}

// Herança: CarroEletrico herda de Carro
class CarroEletrico extends Carro {
    constructor(marca, ano, pneu, bateria, cor) {
        super(marca, ano, pneu); // Chama o construtor da classe pai
        this.bateria = bateria;
        this.cor = cor;
    }

    carregarBateria() {
        console.log(`A bateria de ${this.bateria} está carregando! 🔋`);
    }

    mostrarCor() { // Nome alterado para evitar conflito
        console.log(`A cor do carro é ${this.cor}`);
    }
}

// Criando um objeto CarroEletrico
let meuTesla = new CarroEletrico("Tesla", 2021, "Phillips", "90%", "branco");

meuTesla.ligar();
meuTesla.verificarPneu();
meuTesla.carregarBateria();
meuTesla.mostrarCor();