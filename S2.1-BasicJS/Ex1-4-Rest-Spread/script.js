// Exercici 1.4: Rest & Spread operators


// Nivell 1


// Exercici 1
// Operador Spread en Arrays: Crea dues arrays, array1 i array2. Utilitza l'operador spread per a crear una tercera array que contingui tots els elements de array1 i array2.

const array1 = [1,2,3,4]
const array2 =[5,6,7]

const array3 = [...array1, ...array2]

console.log(array3)

// Exercici 2
// Operador Rest en Funcions: Crea una funció 'suma' que utilitzi l'operador rest per a acceptar un nombre indeterminat d'arguments i retornar la seva suma.

function suma(...numbers) {
   return numbers.reduce((x, y) => x + y)
}

console.log(suma(1, 2, 3));

// Nivell 2


// Exercici 3
// Copiant objectes amb Spread: Crea un objecte 'objecte1'. Després crea un segon objecte, 'objecte2', que sigui una còpia de 'objecte1' utilitzant l'operador spread. Canvia una propietat de 'objecte2' i comprova que 'objecte1' no ha canviat.

const objecte1 = {
    name: 'Nerea',
    age: 29
}

const objecte2 = {
    ...objecte1,
    name: 'Paula'
}


console.log(objecte1)
console.log(objecte2)


// Exercici 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.

const array = [1, 2, 3, 4, 5]

const [first, second, ...rest] = array

console.log(first)
console.log(second)
console.log(rest)


// Nivell 3
// Exercici 5
// Spread en Funcions: Crea una funció que accepti tres arguments. Després, crea una array amb tres elements i crida la funció utilitzant l'operador spread amb aquesta array.

const arrayNew = [1, 2, 3] 

function collectNum (num1, num2, num3) {
    console.log(num1, num2, num3)
}

collectNum(...arrayNew)



// Exercici 6
// Fusionant Objectes amb Spread: Crea dos objectes amb propietats diferents. Utilitza l'operador spread per a fusionar aquests dos objectes en un de nou.

const objt1 = {
    adress: 'street 123'
    
}
const objt2 = {
    name: 'Antonia',
    age: 80,
    nationality: 'es'
}

const objt3 = {
    ...objt1,
    ...objt2
}

console.log(objt3)