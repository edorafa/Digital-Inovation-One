//forma classica
var obj1 = {
    prop1: 'Digital Innovation One'
};

//outra forma
//problema: repeticao da palavra prop2
var prop2 = 'Digital Innovation One';

var obj = {
    prop2: prop2
};

console.log(obj);

//ECMA6
//simplismente da para omitir o valor da direita
var prop3 = 'Digital Innovation One';

var obj = {
    prop3
}
console.log(obj);

//possível também em funções
function method1(){
    console.log('method called');
}

var obj = {
    method1
}

obj.method1();

//outra forma

var obj2 = {
    sum: function sum(a,b){
        return a + b;
    }
};

console.log(obj2.sum(1,5));


//encurtar forma como escreve os objetos literais

var obj3 = {
    sum(a,b){
        return a + b;
    }
};

console.log(obj3);

//antigamente
//teria que declarar o objeto antes 
//fazer definição posteriormente
var propName = 'teste';

var obj = {};

obj[propName + 'concat'] = 'prop value';
console.log(obj);

//ECMA6

var obj2 = {
    [propName + 'concat']: 'prop value'
};
console.log(obj2);
