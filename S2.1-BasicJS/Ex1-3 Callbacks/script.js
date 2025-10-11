// Exercici 1.3: Callbacks


// Nivell 1


// Exercici 1
// Callback bàsic: Escriu una funció anomenada processar que accepti dos paràmetres: un nombre i una funció de callback. La funció processar ha d'invocar la funció de callback, passant el nombre com a paràmetre.


function process (num, callback) {
    callback(num);
}

function showNum (num) {
    console.log( ` El número processat es: ${num}`)
}

process(4, showNum);

// Exercici 2
// Callbacks amb operacions matemàtiques: Escriu una funció calculadora que accepti tres paràmetres: dos nombres i una funció de callback. La funció calculadora ha d'invocar la funció de callback amb els dos nombres com a paràmetres. Després, crida calculadora amb una funció que faci la suma dels dos nombres.


function calculate (num1, num2, callback) {
    callback(num1, num2);
}

function sumNumbers (num1, num2) {
    console.log( ` ${num1} + ${num2} = ${num1 + num2}`)
}

calculate(4, 5, sumNumbers);

// Nivell 2


// Exercici 3
// Ús de callbacks en funcions asíncrones: Escriu una funció esperarISaludar que accepti dos paràmetres: un nom i una funció de callback. La funció ha d'esperar 2 segons i llavors invocar la funció de callback, passant el nom com a paràmetre.

function waitAndGreet (name, callback) {
   setTimeout(() => {
    callback(name)}, 2000); 
}

function sayHello (name) {
    console.log( ` Hello, ${name}!`)
}

waitAndGreet('Pepito', sayHello);

// Exercici 4
// Callbacks amb arrays: Escriu una funció processarElements que accepti dos paràmetres: un array i una funció de callback. La funció processarElements ha d'invocar la funció de callback per cada element de l'array.

const array = [1, 2, 3, 4]

function processElements(array, callback ) {
    array.forEach(element => { callback(element) });
}

function showElement (element) {
    console.log(`Element : ${element}  ` )
}

processElements(array, showElement);

// Nivell 3
// Exercici 5
// // Escriu una funció processarCadena que accepti dos paràmetres: una cadena de caràcters i una funció de callback. La funció processarCadena ha de convertir la cadena a majúscules i llavors invocar la funció de callback amb la cadena transformada.


function processChain (chain, callback) {
    callback(chain.toUpperCase())
}

function showChain (chainTransformed){
    console.log(chainTransformed)
}

processChain('hola', showChain);
