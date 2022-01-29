var v_f = false;
console.log(typeof(v_f))

var numero = 1;
console.log(typeof(numero))

var nome = 'rafa';
console.log(typeof(nome))

// como declarar
var variavel = 'diana';
variavel = 'martine';
console.log(variavel)

var variavel2 = 'rafael';
variavel2 = 'luan';
console.log(variavel2)

const CONSTANTE = 'rafa';

//ESCOPO
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal();

//atribuição
var atribuicao = 'rafael';

//comparação
var comparacao = '0' == 0;
console.log(comparacao);

//comparação
var comparacaoIdentica = '0' === 0;
console.log(comparacaoIdentica);

//adição
var adicao = 1 + 1;
console.log(adicao);

//subtracao
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 5 * 5;
console.log(multiplicacao);

//divisaoReal
var divisaoReal = 6 + 2;
console.log(divisaoReal);

//resto
var resto = 5 % 2;
console.log(resto);

//potencia
var potencia = 5 ** 3;
console.log(potencia);

// OPERADORES RELACIONAIS

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual a
var maiorOuIgua = 5 >= 2;
console.log(maiorOuIgua);

//menor ou igual a
var menorOuIgua = 5 <= 2;
console.log(menorOuIgua);

// OPERADORES LÓGICOS
var a = true && false;
console.log(a);

var b = true || false;
console.log(b);

var c = !(true);
console.log(c);