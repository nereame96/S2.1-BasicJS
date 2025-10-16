console.log('Exercise 7')

const greetPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, world')
    }, 2000);

}
)




greetPromise.then((result) => {
    console.log(result)
})




// let greet = 'Hola'

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






async function printMessage() {
    try {
        const message = await greetPromise;
        console.log(message)
    } catch (error) {
        console.error('Houston, we have a problem' , error);
    }
}

printMessage()






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






const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Hello')
})

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Bye')
})

Promise.all([promise1, promise2]).then((x) => {
    console.log(x)
})