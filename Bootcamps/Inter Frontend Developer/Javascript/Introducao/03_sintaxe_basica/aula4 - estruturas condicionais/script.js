var jogador1 = 0;
var jogador2 = 1;
var placar;

//if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos') : console.log('Jogadores Inválidos');

if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!')
    placar = jogador1 > jogador2;
}else if (jogador2 > 0 && jogador1 == 0){
    console.log('Jogador 2 marcou ponto!')
    placar = jogador2 > jogador1;
}else{
    console.log('Jogo empatado!')
}

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
}

let array = ['a', 'b', 'c', 'd', 'e',]
let object = { propriedade1: 'valor1', propriedade2: 'valor2'}

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

for(let i in array){
    console.log(i);
}

for(i in object){
    console.log(i);
}

for(i of array){
    console.log(i)
}

var a = 0;
while (a < 10){
    a++;
    console.log(a);
}

var b = 0;
do{
    b++;
    console.log(b);
}while(b < 10);