//ES/ - Async / Await
//Uma forma de criar promises de maneira mais simples
//e lidar com promises dentro de promises

//Inspirada em outras linguagens de programação

//a palavras async transforma a função em uma promise
const simpleFunction = async () => {
    return 12345;
};

simpleFunction().then(data => {
    console.log(data);
});

//assim como promise é possível tratar o erro
const simpleFunction2 = async () => {
    throw new Error('Oh no!');
    return 12345;
};

simpleFunction2().then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//async por si só nao e utilizada sozinha
//ela vem com o await
//ele esepra que outras promises sejam resolvidas
//sempre que eu tiver uma promise e quiser aguardar que
//ela seja resolvida eu posso utilizar await

const asyncTimer = () => new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve(12345);
    }, 1000);
});

const simpleFunc3 = async () => {
    const data = await asyncTimer();
    return data;
};

simpleFunc3()
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

//começamos a observar um comportamento de lidar com coisas
//assincronas de maneira sequencial


//faz a resoução de um código assincrono de forma sequencial
const simpleFunc4 = async () => {
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then(resStream =>
        resStream.json()
    );
    return data;
};

simpleFunc4()
.then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});