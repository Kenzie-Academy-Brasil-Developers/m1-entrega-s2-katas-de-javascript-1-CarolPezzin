function oneThroughTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <= 20; counter++) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(oneThroughTwenty());

//call function oneThroughTwenty

function evensToTwenty() {
    let par = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            par.push(i)
        }
    }
    return par
}

console.log(evensToTwenty());

//call function evensToTwenty

function oddsToTwenty() {

    let par = []
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            par.push(i)
        }
    }
    return par

}
console.log(oddsToTwenty())

//call function oddsToTwenty

function multiplesOfFive() {

    let multiplo = []
    for (let i = 0; i <= 100; i += 5) {
        if (i % 5 === 0) {
            multiplo.push(i)
        }
    }
    return multiplo

}
console.log(multiplesOfFive())

//call function multiplesOfFive

function squareNumbers() {
    let quadrado = []
    for (let i = 0; i <= 100; i++) {
        if (i % 1 === 0) {
            quadrado.push(i)
        }
    }
    return quadrado
}
console.log(squareNumbers())

//call function squareNumbers

function countingBackwards() {
    let count = []
    for (let i = 20; i >= 1; i--) {
        count.push(i)
    }
    return count
}
console.log(countingBackwards())

//call function countingBackwards

function evenNumbersBackwards() {
    let count = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 === 0) {
            count.push(i)
        }
    }
    return count
}
console.log(evenNumbersBackwards())

//call function evenNumbersBackwards

function oddNumbersBackwards() {
    let count = []
    for (let i = 20; i >= 1; i--) {
        if (i % 2 !== 0) {
            count.push(i)
        }
    }
    return count

}
console.log(oddNumbersBackwards())

//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    let multiplo = []
    for (let i = 100; i >= 0; i--) {
        if (i % 5 === 0) {
            multiplo.push(i)
        }
    }
    return multiplo
}
console.log(multiplesOfFiveBackwards())

//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    let raiz = []
    for (let i = 100; i >= 0; i--) {
        if (i % 1 === 0) {
            raiz.push(i)
        }
    }
    return raiz
}
console.log(squareNumbersBackwards())
    //call function squareNumbersBackwards



function wordKey(array) {
    let word = array.split("")
    for (let i = 0; i > array.length; i++) {

    }
    return word.join('')
}
console.log(wordKey('maio', 'abril', 'dezembro', 'fevereiro'))