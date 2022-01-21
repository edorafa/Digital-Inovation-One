// Variaveis
var desconto = 0.2;
const PRECO = 2;
var total = PRECO - desconto;
console.log(total);

//Funções
function soma(a,b){
    return a + b;
}
console.log(soma(10,5));
//soma(10 + 5);

function returnEvenValues(array){
    let evenNums = [];
    for(let i = 0; i < array.length; i++);
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        }
}
