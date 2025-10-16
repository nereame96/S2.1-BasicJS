console.log('Exercise 4')

const array1 = [1,2,3,4]
const array2 =[5,6,7]

const array3 = [...array1, ...array2]

console.log(array3)




function suma(...numbers) {
   return numbers.reduce((x, y) => x + y)
}

console.log(suma(1, 2, 3));





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





const array4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = array4

console.log(first)
console.log(second)
console.log(rest)





const arrayNew = [1, 2, 3] 

function collectNum (num1, num2, num3) {
    console.log(num1, num2, num3)
}

collectNum(...arrayNew)





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