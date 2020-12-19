
//spred operator
//pega todos os itens de um array e trasforma
//em parâmetros.

/* Pode ser utilizado
    * Strings
    * Arrays
    * Literal Objects
    * Objetos iteraveis
 */

 //ARRAYS
const multiply = (...args) => args.reduce((acc, value) => acc*value, 1)

const sum6 = (...rest) => {
    return multiply(...rest);
};

console.log(sum6(5,5,5,2,3));

//STRINGS
const str = 'Digital Innovation One';

function logArgs(){
    console.log(arguments);
}

logArgs(...str);

//ARRAYS 2

const arr = [1,2,3,4];

function logArgs2(a,b,c){
    console.log(a,b,c);
}

logArgs2(...arr);

//CONSTRUIR ARRAYS

const arr2 = [...arr,5,6,7];
const arr3 = [...arr2, ...arr, 0,0,0]
const arrClone = [...arr];

console.log(arr2);
console.log(arr3);

//Objetos literais
//Só pode ser usado parar construir novos objetos literais não iteraveis
//Não consegue construir um array
//Ideal para fazer clone de objetos

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    teste2: 'hello'
}

console.log(obj2);

//Clone de objeto
const clone = {... obj };

//Clone de objeto com subobjeto
const objA = {
    test: 123,
    subObj: {
        test:123
    }
};

const objB = {... obj, subObj: { ...obj.subObj } };
objB.subObj.test = 456;
console.log(objA);