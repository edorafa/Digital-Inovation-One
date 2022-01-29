function funcao(){
    console.log('Essa mensagem veio de uma função');
}

function mensagem(primeiro, segundo){
    console.log(primeiro, segundo)
}

funcao();
mensagem(1,2);

//com nomeação
var funcao = function funcao(){
    console.log('Funcao 1');
}
funcao();

//sem nomeação
var funcao = function (){
    console.log('Funcao 2');
}

funcao();

//arrow function
var funcao = () => {
    console.log('Sou uma arrow function');
}

funcao();

