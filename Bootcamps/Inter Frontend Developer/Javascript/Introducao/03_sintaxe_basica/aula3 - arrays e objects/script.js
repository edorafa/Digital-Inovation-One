//VETORES E ARRAYS

let array = ['string', 1, true, 'a', 'b', 'c'];
console.log(array);

let array2  = ['string', 1, true, array];
console.log(array2[3]);

// foreach
array.forEach(function(item, index){
    console.log(item, index);
})

//push: adiciona um item no final do array
array.push('novo item');
console.log(array);

//pop: remove um item no final do array
array.pop();
array.pop();
console.log(array);

// shift remove um item no inicio do array
array.shift();
console.log(array);

// shift adiciona um item no inicio do array
array.unshift('item no inicio');
console.log(array);

console.log('Indice: ' + array.indexOf('item no inicio'))

array.splice(0,2)
console.log(array)

let novoArray = array.slice(0,3)
console.log(novoArray);

//OBJETOS

let object = {string: 'texto', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objecto interno'}};
console.log(object.objectInterno);

var string = object.string;
console.log(string);

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);