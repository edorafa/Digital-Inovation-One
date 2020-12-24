//Promises

const doSomethingPromise = () => 
    new Promise((resolve, reject) =>{
    //throw new Error('Something went wrong');
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1000); 
});

const doOtherthingPromise = () =>
    new Promise((resolve, reject) =>{
    //throw new Error('Something went wrong');
    setTimeout(function(){
        //did other thing
        resolve('Second data');
    }, 1000); 
});

/*
doSomethingPromise
    .then(data => {
        console.log(data);
        return doOtherthingPromise;
    })
    .then(data2 => console.log(data2)
    .catch(error => console.log('Ops', error));
*/

//Tipos de Promises

//Pending
//Pendente, em execução
//console.log(doSomethingPromise);

//Fulfilled
//Terminou de executar
//doSomethingPromise.then(data => console.log(data));

//Reject
//Caso aconteça com algum erro

//Promises executadas ao mesmo tempo
Promise.all([doSomethingPromise(), doOtherthingPromise()]).then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

// a promise que for resolvida primeiro é a que retorna nos dados
Promise.race([doSomethingPromise(), doOtherthingPromise()]). then(data => {
    console.log(data);
})

