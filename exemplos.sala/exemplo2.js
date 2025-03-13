class Carro {
    constructor(marca, ano) {
        this.marca = marca;
        this.ano = ano;
    }

    ligar() {
        console.log(`${this.marca} está ligado! 🚗💨`);
    }
}

// Criando um objeto da classe Carro
let meuCarro = new Carro("Fiat", 2022);
meuCarro.ligar(); // Saída: Fiat está ligado!