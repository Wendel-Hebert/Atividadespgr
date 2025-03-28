# Questões objetivas

**1)** Considere o seguinte código JavaScript:

```javascript
//EX01
let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1 && r * 2 > p) || q + r < p;
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto);
```

Qual das seguintes alternativas melhor descreve o que o código faz?

R =
A) O código avalia a expressão booleana, imprime `true`, calcula o produto dos números na lista e imprime o resultado no console.

---

**2)** O código a seguir contém duas funções que calculam o limite de crédito de um cliente com base nos seus gastos e na renda mensal.

```javascript
// Versão 1 da função de análise de crédito
function analisarCredito1() {
  var compras = [2500, 1200, 800, 100];
  var totalCompras = compras[0];
  var limite = 5000;
  var status = "aprovado";
  var saldoDisponivel = 0;
  var i = 1;

  do {
    totalCompras += compras[i];
    i++;
  } while (limite >= totalCompras && i < compras.length);

  saldoDisponivel = limite - totalCompras;

  if (saldoDisponivel < 0) {
    status = "negado";
  }
  console.log(
    `Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`
  );
}
```

```javascript
// Versão 2 da função de análise de crédito
function analisarCredito2() {
  var compras = [2500, 1200, 800, 100];
  var totalCompras = compras[0];
  var limite = 5000;
  var status = "aprovado";
  var saldoDisponivel = 0;
  var i = 1;

  while (limite >= totalCompras && i < compras.length) {
    totalCompras += compras[i];
    i++;
  }

  saldoDisponivel = limite - totalCompras;

  if (saldoDisponivel < 0) {
    status = "negado";
  }
  console.log(
    `Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`
  );
}
```

Se ambas as funções forem executadas com os valores fornecidos, qual será a saída exibida no console?

R = B) analisarCredito1() exibirá: 'Seu crédito foi negado. Saldo disponível: -600.', enquanto analisarCredito2() exibirá: 'Seu crédito foi negado. Saldo disponível: -200.'

---

**3)** Considere o seguinte trecho de código em JavaScript:

```javascript
//EX03
const idade = 21;

if (idade >= 18 && idade < 60) {
  console.log("Você é um adulto!");
} else if (idade < 18) {
  console.log("Você é menor de idade!");
} else {
  console.log("Você está na melhor idade!");
}
```

Qual das seguintes alternativas melhor descreve o comportamento do código?

R = B) O código verifica se a idade pertence à faixa adulta. Se for, exibe "Você é um adulto!". Caso contrário, verifica se é menor de idade e exibe "Você é menor de idade!". Se nenhuma das condições anteriores for verdadeira, exibe "Você está na melhor idade!".

---

**4)** Qual será o resultado impresso no console após a execução do seguinte código?

```javascript
//EX04
var energiaDisponivel = 1200;
var bateriaExtra = 400;
var consumoDispositivos = [300, 600, 500, 200, 400];

for (var i = 0; i < consumoDispositivos.length; i++) {
  var consumo = consumoDispositivos[i];

  if (consumo <= energiaDisponivel) {
    console.log(
      "Dispositivo " +
        (i + 1) +
        " ligado. Energia restante: " +
        (energiaDisponivel - consumo)
    );
    energiaDisponivel -= consumo;
  } else if (consumo <= energiaDisponivel + bateriaExtra) {
    console.log(
      "Dispositivo " +
        (i + 1) +
        " ligado com bateria extra. Energia restante: " +
        (energiaDisponivel + bateriaExtra - consumo)
    );
    energiaDisponivel = 0;
    bateriaExtra -= consumo - energiaDisponivel;
  } else {
    console.log(
      "Dispositivo " + (i + 1) + " não pode ser ligado. Energia insuficiente."
    );
  }
}
```

Escolha a opção que responde corretamente:

R = D)
Dispositivo 1 ligado. Energia restante: 900

Dispositivo 2 ligado. Energia restante: 300

Dispositivo 3 ligado com bateria extra. Energia restante: 200

Dispositivo 4 não pode ser ligado. Energia insuficiente.

Dispositivo 5 não pode ser ligado. Energia insuficiente.

---

**5)** Qual é a principal função do método update() em um jogo desenvolvido com Phaser.js?

Escolha a opção que melhor descreve seu propósito:

R = B) O método update() é chamado continuamente a cada quadro (frame) do jogo, sendo usado para atualizar a lógica, movimentação e interações dos objetos na cena.

---

**6)** Qual é o principal objetivo do módulo Matter.js Physics em Phaser.js?

Escolha a opção que responde corretamente:

R = A) Simular física avançada, incluindo corpos rígidos, colisões complexas e interação entre objetos com gravidade e forças.

---

# Questões dissertativas

**7)** Uma loja online deseja implementar um sistema de classificação de pedidos com base no valor total da compra. O sistema deve determinar a categoria de um pedido com as seguintes regras:

```

Pedidos abaixo de R$50,00 → "Frete não disponível!"

Pedidos entre R$50,00 e R$199,99 (inclusive) → "Frete com custo adicional!"

Pedidos de R$200,00 ou mais → "Frete grátis!"
```

Implemente um pseudocódigo que receba o valor total da compra e exiba a classificação correta do frete para o cliente.

```js
function classificarFrete(valorCompra) {
  if (valorCompra < 50) {
    console.log("Frete não disponível!");
  } else if (valorCompra <= 199.99) {
    console.log("Frete com custo adicional!");
  } else {
    console.log("Frete grátis!");
  }
}
var valorCompra = 200;
classificarFrete(valorCompra);
//Saida esperada: Frete grátis!
```

---

**8)** Considere a implementação da classe base Veiculo em um sistema de modelagem de veículos. Sua tarefa é implementar, utilizando pseudocódigo, as classes derivadas Carro e Moto, que herdam da classe Veiculo, adicionando atributos específicos e métodos para calcular o consumo de combustível de um carro e de uma moto, respectivamente.

```
Classe Veiculo:
Atributos:

modelo
ano
Método Construtor(modelo, ano):

Define os valores dos atributos modelo e ano com os valores passados como parâmetro.
Método CalcularConsumo():
```

Implementação genérica para cálculo de consumo, a ser sobrescrita pelas subclasses.
Agora, implemente as classes Carro e Moto, garantindo que ambas herdem de Veiculo e possuam métodos específicos para calcular o consumo de combustível com base na quilometragem e eficiência do veículo.

```js
class Veiculo {
  constructor(modelo, ano) {
    this.modelo = modelo;
    this.ano = ano;
  }
  calcularConsumo() {
    return "Consumo depende do tipo de veículo.";
  }
}

class Carro extends Veiculo {
  constructor(modelo, ano, eficiencia) {
    super(modelo, ano);
    this.eficiencia = eficiencia; // km/L
  }
  calcularConsumo(distancia) {
    return distancia / this.eficiencia;
  }
}

class Moto extends Veiculo {
  constructor(modelo, ano, eficiencia) {
    super(modelo, ano);
    this.eficiencia = eficiencia;
  }
  calcularConsumo(distancia) {
    return distancia / this.eficiencia;
  }
}
var carro = new Carro("Fusca", 1970, 10); // 10 km/L
var moto = new Moto("CB500", 2020, 20); // 20 km/L
var distancia = 100; // km

console.log(
  `O carro ${carro.modelo} consome ${carro.calcularConsumo(
    distancia
  )} litros para percorrer ${distancia} km.`
);

console.log(
  `A moto ${moto.modelo} consome ${moto.calcularConsumo(
    distancia
  )} litros para percorrer ${distancia} km.`
);
// Saída esperada:
// O carro Fusca consome 10 litros para percorrer 100 km.
// A moto CB500 consome 5 litros para percorrer 100 km.
```

---

**9)** Você é um cientista da NASA e está ajudando no desenvolvimento de um sistema de pouso para sondas espaciais em Marte. Seu objetivo é calcular o tempo necessário para que a sonda reduza sua velocidade até um nível seguro para pouso, considerando uma velocidade inicial de entrada na atmosfera marciana e uma taxa de desaceleração constante causada pelo atrito atmosférico e retrofoguetes.

Entretanto, a sonda não pode ultrapassar um tempo máximo de descida para evitar desvios orbitais, nem pode desacelerar além de um limite mínimo, pois isso poderia causar instabilidade no pouso.

Implemente a lógica dessa simulação em pseudocódigo, considerando a seguinte equação para atualização da velocidade:

Considere a fórumla de atualização velocidade:

```
    velocidade = velocidadeInicial - desaceleracao * tempo
```

Seu programa deve determinar quanto tempo será necessário para que a sonda atinja uma velocidade segura de pouso, sem ultrapassar os limites estabelecidos.

```js
function calcularTempoDesaceleracao(
  velocidadeInicial,
  desaceleracao,
  tempoMaximo,
  velocidadeSegura
) {
  let tempo = 0;
  let velocidade = velocidadeInicial;

  while (velocidade > velocidadeSegura && tempo < tempoMaximo) {
    velocidade -= desaceleracao;
    tempo++;
  }

  if (velocidade <= velocidadeSegura) {
    console.log(`Tempo necessário para pouso seguro: ${tempo} segundos.`);
  } else {
    console.log("Tempo máximo atingido sem atingir velocidade segura!");
  }
}
var velocidadeInicial = 100; // km/h
var desaceleracao = 10; // km/h por segundo
var tempoMaximo = 10; // segundos
var velocidadeSegura = 20; // km/h

calcularTempoDesaceleracao(
  velocidadeInicial,
  desaceleracao,
  tempoMaximo,
  velocidadeSegura
);

//saida esperada = Tempo necessário para pouso seguro: 8 segundos.
```

---

**10)** Em um sistema de análise financeira, as operações de investimento de uma empresa podem ser representadas por matrizes, onde cada linha representa um tipo de investimento e cada coluna representa um período de tempo.

A seguir, é fornecida a implementação da função SomarMatrizesInvestimento(matrizA, matrizB), que soma os valores de duas matrizes de investimento. Sua tarefa é implementar uma função semelhante, porém que realize a multiplicação das matrizes de investimento, determinando como os investimentos afetam os resultados ao longo do tempo.

```
Função SomarMatrizesInvestimento(matrizA, matrizB):
    # Verifica se as matrizes têm o mesmo número de linhas e colunas
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."
    Senão:
        linhas <- tamanho(matrizA)
        colunas <- tamanho(matrizA[0])
        matrizResultado <- novaMatriz(linhas, colunas)

        # Loop para percorrer cada elemento das matrizes e calcular a soma
        Para i de 0 até linhas-1 faça:
            Para j de 0 até colunas-1 faça:
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]

        Retornar matrizResultado

# Exemplo de uso da função
investimentosAno1 <- [[1000, 2000], [1500, 2500]]
investimentosAno2 <- [[1200, 1800], [1300, 2700]]

totalInvestimentos <- SomarMatrizesInvestimento(investimentosAno1, investimentosAno2)
Escrever("Total de investimentos acumulados:")
ImprimirMatriz(totalInvestimentos)
```

Agora, implemente a função MultiplicarMatrizesInvestimento(matrizA, matrizB), que multiplica as duas matrizes, simulando o efeito de diferentes fatores de crescimento e impacto financeiro nos investimentos ao longo do tempo.

```js
function somarMatrizesInvestimento(matrizA, matrizB) {
  if (
    matrizA.length !== matrizB.length ||
    matrizA[0].length !== matrizB[0].length
  ) {
    return "As matrizes não podem ser somadas. Elas têm dimensões diferentes.";
  }

  let linhas = matrizA.length;
  let colunas = matrizA[0].length;
  let matrizResultado = Array(linhas)
    .fill()
    .map(() => Array(colunas).fill(0));

  for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
      matrizResultado[i][j] = matrizA[i][j] + matrizB[i][j];
    }
  }
  return matrizResultado;
}

// Exemplo de uso da função
let investimentosAno1 = [
  [1000, 2000],
  [1500, 2500],
];
let investimentosAno2 = [
  [1200, 1800],
  [1300, 2700],
];

let totalInvestimentos = somarMatrizesInvestimento(
  investimentosAno1,
  investimentosAno2
);
console.log("Total de investimentos acumulados:", totalInvestimentos);
```
