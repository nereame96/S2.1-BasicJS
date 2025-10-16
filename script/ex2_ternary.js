

console.log('Exercise 2')

const potConduir = (age) => age >= 18 ? 'Pots conduir' : 'No pots conduir';

console.log(potConduir(19));


const num1 = 15;
const num2 = 10;

console.log(` Comparar (${num1} vs ${num2}):`, num1 > num2 ? 'num1 és més gran' : 'num2 és més gran');



const num = 0; // Prova amb 5, -5, o 0

console.log(` Signe del número (${num}):`, num > 0 ? 'Positiu' : ( num < 0 ? 'Negatiu' : 'Zero'));



const findMax = (a, b, c) => a > b ? ( a > c ? a : c ) : ( b > c ? b : c); 
console.log(' Trobar el Màxim (10, 25, 5):', findMax(10, 25, 5));
console.log(' Trobar el Màxim (30, 15, 40):', findMax(30, 15, 40));


// const numArray = [1, 2, 3, 4];

const evenOdd = (numArray) => numArray.forEach( number => console.log(number % 2 == 0 ? ` ${number} Even` : ` ${number} Odd`) );

evenOdd(numArray)