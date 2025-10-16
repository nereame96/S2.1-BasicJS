console.log('Exercise 5')




const arr = [1, 2, 3, 4]

const arrSqr = arr.map( x => x ** 2)

console.log(arrSqr)






const arrEven = arr.filter( x => x % 2 === 0)

console.log(arrEven)





const arr1 = [1, 10 , 8, 11]

let result1 = arr1.find( x => x > 10)

console.log(result1)






const arr2 = [13, 7, 8, 21]

let result2 = arr2.reduce( (a, b) => a + b  )

console.log(result2)





const arr3 = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]

const calculateAndFilter = (array) =>  array

    .filter( x => x >= 10 )
    .map( x => x * 2)
    .reduce( (a, b) => a + b);


console.log(calculateAndFilter(arr3))




const arr4 = [11, 12, 13, 14]

let arrEvery = arr4.every( x => x > 10)

let arrSome = arr4.some( x => x > 10)

console.log(arrEvery) 
console.log(arrSome) 