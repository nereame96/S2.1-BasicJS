console.log('Exercise 6')



let names = ['Anna', 'Bernat', 'Clara']

const printNames = (array) => array.forEach( name => console.log(name));

printNames(names)





function printNames2 (array) {
    for (const name of names) {
        console.log(name);
    }
}

printNames2(names)




const numbers = [1, 2, 3, 4, 5, 6];

const numEven = numbers.filter( x => x % 2 === 0)

console.log(numEven)





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




let numeros = [1, 2, 3, 4, 5, 6];

for (const element  of numeros) {
   if(element === 5) {console.log(element);
    break;
   }
    console.log(element);
}





for (const [index, values] of names.entries()) {
    console.log( index, values)
}