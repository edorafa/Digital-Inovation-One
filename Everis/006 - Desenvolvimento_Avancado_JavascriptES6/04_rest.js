//função classica
function sum1(a,b){
    return a + b;
}
console.log(sum1(5,5));

// e se eu quiser argumentos ilimitados na
// chamada da função?
// forma antiga
function sum2(a,b){
    var value = 0;

    for (var i=0; i < arguments.length; i++){
        value += arguments[i];
    }

    return value;
}
console.log(sum2(5,5,5,2,3));

//forma atual: ECMA6
// rest operator ...

function sum3(...args){
    return args.reduce((acc,value) => acc + value, 0);
}
console.log(sum3(5,5,5,5,5));

//em arrow function
const sum4 = (a, b, ...rest) => {
    console.log(a,b,rest);
}
console.log(sum4(5,5,5,2,3));

//forma antiga

const multiply = (...args) => args.reduce((acc, value) => acc*value, 1)

const sum5 = (...rest) => {
    return multiply.apply(undefined, rest);
};

console.log(sum5(5,5,5,2,3));

//rest
//pega todos os parâmetros de uma função
//e transforma num array
