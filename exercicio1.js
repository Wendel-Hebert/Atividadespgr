var notas = [7.2, 3.0, 5.0];
var soma = 0;

for(var i = 0; i < notas[i]; i++){
    soma += notas[i];
}
var media = soma / 3;

if(media >= 7.0){
    console.log('media:', media.toFixed(2));
    console.log('Status: Aprovado');
} else{
    console.log('media', media.toFixed(2));
    console.log('Status: Reprovado');
}