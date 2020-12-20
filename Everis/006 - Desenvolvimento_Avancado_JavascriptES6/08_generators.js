//Generators
//são funções com pausa e despausam
//e retornam valores através da interface
//de iteração com value e done
//ferramenta poderosa para controlar o 
//fluxo da função

function* hello(){
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());

//caso queira adicionar um valor de retorno
function* hello2(){
    console.log('Hello');
    yield 1;

    console.log('From');
    yield 2;

    console.log('Function');
    yield 3;
}

const it2 = hello2();

console.log(it2.next());
console.log(it2.next());
console.log(it2.next());
console.log(it2.next());

//enviando dados para a função
function* hello3(){
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it3 = hello3();

console.log(it3.next());
console.log(it3.next());
console.log(it3.next('Outside'));

// iterações infinitas
//só invoca quando executo o next
function* naturalNumbers(){
    let number = 0;
    while (true){
        yield number;
        number++;
    }
}

const it4 = naturalNumbers();

console.log(it4.next());
console.log(it4.next());
console.log(it4.next());

//forma de construir iteradores
const obj = {
    values: [1,2,3,4],
    *[Symbol.iterator](){
        for (var i = 0; i < this.values.length; i++){
            yield this.values[i];
        }
    }
};

for(let value of obj){
    console.log(value);
}

