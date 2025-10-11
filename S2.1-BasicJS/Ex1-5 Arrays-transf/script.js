// Exercici 1.5: Array transformations


// Nivell 1


// Exercici 1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const arr = [1, 2, 3, 4]

const arrSqr = arr.map( x => x ** 2)

console.log(arrSqr)



// Exercici 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const arrEven = arr.filter( x => x % 2 === 0)

console.log(arrEven)

// Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const arr1 = [1, 10 , 8, 11]

let result1 = arr1.find( x => x > 10)

console.log(result1)


// Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.


const arr2 = [13, 7, 8, 21]

let result2 = arr2.reduce( (a, b) => a + b  )

console.log(result2)

// Nivell 2


// Exercici 5
// Donat un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una funció en una sola línia que faci el següent:

// - Filtra els nombres majors o iguals a 10.

// - Multiplica cada nombre filtrat per 2.

// - Calcula la suma dels nombres filtrats i multiplicats per 2.

// - La funció ha de retornar el resultat de la suma.

const arr3 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const calculate = (array) =>  array

    .filter( x => x >= 10 )
    .map( x => x * 2)
    .reduce( (a, b) => a + b);


console.log(calculate(arr3))

// Nivell 3
// Exercici 6
// Every / Some: Usa every i some per a determinar si tots o alguns dels elements de l'array [11, 12, 13, 14] són majors que 10, respectivament

const arr4 = [11, 12, 13, 14]

let arrEvery = arr4.every( x => x > 10)

let arrSome = arr4.some( x => x > 10)

console.log(arrEvery) //true
console.log(arrSome) //true