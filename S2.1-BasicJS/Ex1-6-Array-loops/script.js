// Exercici 1.6: Array loops


// Nivell 1


// Exercici 1
// forEach: Teniu una array de noms. Utilitza forEach per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

let names = ['Anna', 'Bernat', 'Clara']

const printNames = (array) => array.forEach( name => console.log(name));

printNames(names)


// Exercici 2
// for-of: Teniu una array de noms. Utilitza un bucle for-of per a imprimir cada nom a la consola: let noms = ['Anna', 'Bernat', 'Clara'];

function printNames2 (array) {
    for (const name of names) {
        console.log(name);
    }
}

printNames2(names)


// Exercici 3
// filter: Teniu una array de números. Utilitza filter per a crear una nova array que només contingui els números parells. let numeros = [1, 2, 3, 4, 5, 6];

const numbers = [1, 2, 3, 4, 5, 6];

const numEven = numbers.filter( x => x % 2 === 0)

console.log(numEven)

// Nivell 2


// Exercici 4
// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

let obj = { 
    nom: 'Ona', 
    edat: 25, 
    ciutat: 'Barcelona' };

function printObject (obj) {
    for (const key in obj) {
        console.log(key,  obj[key] );
    }
}

printObject(obj)    

// Exercici 5
// for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

let numeros = [1, 2, 3, 4, 5, 6];

for (const element  of numeros) {
   if(element === 5) {console.log(element);
    break;
   }
    console.log(element);
}

// Nivell 3
// Exercici 6
// for-of amb index: Utilitza un bucle for-of per a imprimir a la consola cada element de l'array i la seva posició (index): let noms = ['Anna', 'Bernat', 'Clara']

for (const [index, values] of names.entries()) {
    console.log( index, values)
}