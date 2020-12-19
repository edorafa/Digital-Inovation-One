var sumOld = function(a,b){
    return a + b;
};

// Arrow functions

var sum = (a,b) => a + b;
console.log(sum(5,5));

//tudo que não for uma expressão é necessário abrir chaves
var sum2 = (a,b) => {
    var c = 10;

    if ((a + b) < c)
        return c;
    else return a + b;
} 
console.log(sum2(2,9));
 
//apenas um argumento
var sum3 = a => a + 5;
console.log(sum3(10));

//apenas um argumento
var sum4 = ({a}) => a;
console.log(sum4(10));

//reaction operator
var sum5 = (...a) => a;
console.log(sum5(10));

//default values
var sum6 = (a = 5) => a;

//retorno de objetos
var createObj = () => ({ teste: 123});
console.log(createObj());

//função construtora não é possível com arrow functions

//* funciona
function Car (){
    this.foo = 'bar';
}

console.log(new Car());

/* não funciona
var Car2 = () => {
    this.foo = 'bar';
}

console.log(new Car2());
*/

// Hoisting não funciona com arrow functions
log('teste');

function log(value){
    console.log(value);
}

/* não funciona
log('teste');
var log = value => {
    console.log(value);
}*/

//Antigamente

var obj = {
    showContext: function showContext(){
        var _that = this; // pode ser dificil lembrar de colocar pra funcionar

        setTimeout(function () {
            _that.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj = showContext();

//COM ARROW FUNCTION
// Arrow Function já tem o contexto com quem o invoca
var obj2 = {
    showContext: function showContext(){

        setTimeout(() => {
            _that.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};

obj2 = showContext();
