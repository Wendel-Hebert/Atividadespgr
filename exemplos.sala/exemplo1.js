class Carro {
    constructor(marca, ano) {
        this.marca = marca; // Atributo: marca do carro
        this.ano = ano; // Atributo: ano do carro
    }
}

// Criando um objeto (instância) da classe Carro
let meuCarro = new Carro("Toyota", 2020);
console.log(meuCarro.marca); // Saída: Toyota
console.log(meuCarro.ano);   // Saída: 2020
