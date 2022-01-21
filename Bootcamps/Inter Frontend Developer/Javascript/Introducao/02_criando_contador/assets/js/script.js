var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

document.getElementById("adicionar").addEventListener("click", function() {
    if(currentNumber < 10) {
        currentNumber = currentNumber + 1;
        colorChange(currentNumber);
        currentNumberWrapper.innerHTML = currentNumber;
    }
});

document.getElementById("subtrair").addEventListener("click", function() {
    if(currentNumber > -10) {
        currentNumber = currentNumber - 1;
        colorChange(currentNumber);
        currentNumberWrapper.innerHTML = currentNumber;
    }
});

function colorChange(currentNumber){
    if(currentNumber >= 0 ){
        return currentNumberWrapper.style.color = 'black'
    }else {
        return currentNumberWrapper.style.color = 'red';
    }
}