function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão(/)\n5 - Divisão inteira (%)\n6 - Potenciação (**)'));

    let n1 = Number(prompt('Insira o primeiro valor: '));
    let n2 = Number(prompt('Insira o segundo valor: '));
    let resultado;

    console.log(operacao);


    if (operacao == 1){
        soma();
    }else if (operacao == 2){
        subtracao();
    }else if (operacao == 3){
        multiplicacao();
    }else if (operacao == 4){
        divisaoReal();
    }else if (operacao == 5){
        divisaoInteria();
    }else if (operacao == 6){
        potenciacao();
    }

    function soma(){
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
    }

    function subtracao(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
    }

    function multiplicacao(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
    }
    function divisaoReal(){
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
    }
    function divisaoInteria(){
        resultado = n1 % n2;
        alert(`${n1} % ${n2} = ${resultado}`);
    }
    function potenciacao(){
        resultado = n1 ** n2;
        alert(`${n1} elevado a  ${n2} = ${resultado}`);
    }
}

calculadora();

