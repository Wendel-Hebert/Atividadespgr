function calculoD(preco, desconto){
    return preco - ((preco * desconto) / 100); // Retorna o valor corretamente
}

//produtos e seus preços
var maca = 5.0;
var laranja = 4.0;
var pera = 4.0;

//descontos de cada produto 
var dmaca = 40;
var dlaranja = 20;
var dpera = 60;


// imprime valores 
console.log('Preço da maçã =', maca.toFixed(1), 
            'Desconto aplicado =', dmaca.toFixed(1) + "%", 
            'Valor final =', calculoD(maca, dmaca).toFixed(1));

console.log('Preço da laranja =', laranja.toFixed(1), 
            'Desconto aplicado =', dlaranja.toFixed(1) + "%", 
            'Valor final =', calculoD(laranja, dlaranja).toFixed(1));

console.log('Preço da pera =', pera.toFixed(1), 
            'Desconto aplicado =', dpera.toFixed(1) + "%", 
            'Valor final =', calculoD(pera, dpera).toFixed(1));