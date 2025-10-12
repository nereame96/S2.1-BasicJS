// Exercici 1.7: Promises & Async/Await


// Nivell 1


// Exercici 1
// Creació d'una Promesa: Crea una promesa que es resolgui després de 2 segons i que retorni la cadena de text 'Hola, món'.

const greetPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, world')
    }, 2000);

}
)



// Exercici 2
// Utilització d'una Promesa: Utilitza la promesa creada en l'exercici anterior. Crea un .then que imprimeixi el resultat a la consola.

greetPromise.then((result) => {
    console.log(result)
})

// Exercici 3
// Promesa amb reject: Crea una promesa que es resolgui després de 2 segons si l'input és igual a 'Hola', i que la rebutgi si l'input és qualsevol altra cosa.

let greet = 'Hola'

const greetCheck = new Promise ((resolve, reject) => {

    setTimeout(() => {
        if (greet === 'Hola'){
            resolve('Hola')
        } else {
            reject('No Hola')
        }
            
    }, 2000);
}
)

greetCheck.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
} )

// Exercici 4
// Ús de async/await: Escriu una funció asíncrona que utilitzi la funció await per a esperar el resultat de la promesa creada a l'exercici 1, i que després imprimeixi aquest resultat a la consola.

async function printMessage() {
    try {
        const message = await greetPromise;
        console.log(message)
    } catch (error) {
        console.error('Houston, we have a problem' , error);
    }
}

printMessage()

// Nivell 2


// Exercici 5
// Gestió d'errors amb async/await: Modifica la funció de l'exercici 4 per a que capturi qualsevol possible error utilitzant un bloc try/catch.

const greetRejectPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Error!'); 
    }, 2000);
});

async function printMessageCheck() {
    console.log('Please, wait a second')
    try {
        const message = await greetRejectPromise;
        console.log(message)
    } catch (error) {
        console.error('Houston, we have a problem' , error);
    }
}

printMessageCheck()



// Nivell 3
// Exercici 6
// Promise.all: Crea dues promeses que es resolguin després de 2 i 3 segons, respectivament. Utilitza Promise.all per a esperar que ambdues promeses es resolguin, i imprimeix els resultats a la consola.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Hello')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Bye')
})

Promise.all([promise1, promise2]).then((x) => {
    console.log(x)
})