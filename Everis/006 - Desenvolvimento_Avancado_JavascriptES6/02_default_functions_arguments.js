function multiply1(a,b){
    return a * b;
}

console.log(multiply1(5));
//retorna NaN (Not a Number)
//devido a multiplicação por um undefined

function multiply2(a,b){
    b = b || 1; // verifica se b é verdadeiro
    return a * b;
}

console.log(multiply2(5));

//multiplicar por 0 gera problema na atribuição de b
//comportamento atípico na multiplicação
function multiply3(a,b){
    b = b || 1; // verifica se b é verdadeiro
    return a * b;
}

console.log(multiply3(5,0));

// comportamento esperado, mas fica verboso
function multiply4(a,b){
    //b = typeof b === 'undefined' ? 1 : b;
    // ou

    if (typeof b === 'undefined'){
        b = 1;
    }

    return a * b;
}

console.log(multiply4(5,0));

//maneira enxuta de implementar
//caso esqueçam de passar um argumento
function multiply5(a = 2, b = 1){
    return a * b;
}
console.log(multiply5(undefined, 5));

//forma errada, pois a ordem importa
//'a' foi atribuido antes de ser referenciado
function multiply6(b = a, a){
    return a * b;
}
console.log(multiply6(undefined, 5));

//lazy evaluation
//função é executada no momento certo
//gerando numeros randomicos toda vez que é chamada
//bom para: gerar ids randômicos, disparar erros...
function randomNumber(){
    return Math.random()*10;
}

function multiply7(a, b = randomNumber()){
    return a * b;
}
console.log(multiply7(5));
