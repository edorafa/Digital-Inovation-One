//forma antiga
//forma muito verbosa

var arr = ['Apple','Banana','Orange', ['tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];

//Desctructuring Assigment

var [apple2, banana2, orange, [tomato2]] = ['Apple','Banana','Orange',['Tomato']];

//com objetos

var obj = {
    name: 'Celso'
}

//var name = obj.name;
var {name} = obj;

//acessando sub objeto

var obj2 = {
    name: 'Rafael',
    props: {
        age: 26
    }
};

var {
    props: {age}
} = obj2;

console.log(age);

//Destructing de multi-niveis utilizando arrays

var obj3 = {
    name: 'Rafael',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var {
    props: {
        age: age2,
        favoriteColors: [color1, color2]
    }
} = obj3;

console.log(color1);

//Acessando objetos

var arr = [{ name2: 'Apple', type: 'fruit'}];
var obj4 = {
    name: 'Rafael',
    props: {
        age: 26,
        favoriteColors: ['black', 'blue']
    }
};

var [{ name2 }] = arr;
console.log(name2);

//nome personalizado
var [{ name2: fruitName }] = arr;

console.log(fruitName);

//functions
//forma 1
function sum(arr) {
    return arr[0] + arr[1];
}

console.log(sum([5,5]));

//forma 2
function sum2([a, b]) {
    return a + b;
}

console.log(sum2([5,5]));

//forma 2 , com default values
function sum3([a, b] = [0,0]) {
    return a + b;
}

console.log(sum3());

//forma 3, com objetos
function sum4({ a, b}) {
    return a + b;
}

console.log(sum4({ a: 5, b: 5 }));
