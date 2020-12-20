//Symbols
//Maneira de gerar um identificador unico
//É invocado da mesma forma que função

const uniqueId = Symbol();
console.log(uniqueId);

//O valor dentro de symbol serve unica e exclusivamente
//para efeitos de debuug

const uniqueId2 = Symbol('Hello');
console.log(uniqueId2);

//mas nao esta ligado ao seu valor
//caso string de identificação sejam iguais
const uniqueId3 = Symbol('Hello');
console.log(uniqueId2 === uniqueId3);

//utilização
//gerar propriedades 'privadas'
//forma de evitar acessos indesejados
//no exemplo abaixo o obj só sera acessível
//por quem tiver o mesmo symbol
//ou utilizar um método
const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj);

//retornar as propriedades da chave symbol
//de um obj
Object.getOwnPropertySymbols(obj);

//Well know symbols
/**
 * Symbol.iterator
 * Symbol.split
 * Symbol.toStringTag
 */

//iterator
//interface para consumir passo a passo
//uma estrutura de dados
const arr = [1,2,3,4]
const it = arr[Symbol.iterator]();

while(true){
    let {value, done} = it.next();

    if(done){
        break;
    }

    console.log(value);
}

//com ECMA6
console.log('versao apos ECMA6');
for (let value of arr){
    console.log(value);
}

//STRING
const str = 'Digital Innovation One';
for (let value of str){
    console.log(value);
}

//spread
//com o Symbol.iterator é possível 
//dar a propriedade de iteravel
//a um objeto que não tinha essa propriedade

const obj3 = {
    values: [1,2,3,4],
    [Symbol.iterator](){
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i-1],
                    done: i > this.values.length 
                };
            }
        };
    }
};

//agora o objeto é iterável
for (let value of obj3){
    console.log(value);
}

//e também pode ser chamado utilizando spred
const arr3 = [...obj3];
console.log(arr3);