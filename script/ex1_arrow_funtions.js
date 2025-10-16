
console.log('Exercise 1')

const add = (a, b) => a + b;
console.log(add(1,2))


const randomNumber = () => Math.floor(Math.random() * 100)
console.log(randomNumber())




const greet = (name) => console.log(`Hello, ${name}`);

greet('Pepito')



const numArray = [1, 2, 3, 4]

const printNumbers = (numArray) => numArray.forEach(number => console.log(number));

printNumbers(numArray)





const timeOutMessage = () => { 
    setTimeout (() => console.log('Time out'), 3000)

};

timeOutMessage()