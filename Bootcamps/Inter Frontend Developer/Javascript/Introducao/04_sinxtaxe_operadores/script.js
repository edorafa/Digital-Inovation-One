function comparaNumeros(num1, num2){
    if (!num1 || !num2) return 'Insira dois números válidos.';
    const primeiraFrase = criaPrimeiraFrase(num1, num2);
    const segundaFrase = criaSegundaFrase(num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2){
    let saoIguais = '';

    if(num1 !== num2){
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais`;
}

function criaSegundaFrase(num1, num2){
    const soma = num2 + num1;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }
    
    if(compara20){
        resultado20 = 'maior';
    }

    return `e sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(1,3))

let contador = 0;
console.log(contador++);