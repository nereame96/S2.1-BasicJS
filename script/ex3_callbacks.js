console.log('Exercise 3')

function process (num, callback) {
    callback(num);
}

function showNum (num) {
    console.log( ` The process number is: ${num}`)
}

process(4, showNum);




function calculate (num1, num2, callback) {
    callback(num1, num2);
}

function sumNumbers (num1, num2) {
    console.log( ` ${num1} + ${num2} = ${num1 + num2}`)
}

calculate(4, 5, sumNumbers);




function waitAndGreet (name, callback) {
   setTimeout(() => {
    callback(name)}, 2000); 
}

function sayHello (name) {
    console.log( ` Hello, ${name}!`)
}

waitAndGreet('Pepito', sayHello);




const array = [1, 2, 3, 4]

function processElements(array, callback ) {
    array.forEach(element => { callback(element) });
}

function showElement (element) {
    console.log(`Element : ${element}  ` )
}

processElements(array, showElement);




function processChain (chain, callback) {
    callback(chain.toUpperCase())
}

function showChain (chainTransformed){
    console.log(chainTransformed)
}

processChain('hola', showChain);
