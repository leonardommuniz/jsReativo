function getRandomNumber(min, max, time) {
    if (min > max) [max,min] = [min,max]
    return new Promise(resolve => {
        setTimeout( () =>{
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, time)
    })
}

function gerarNumeros(){
    // promise.all recebe um array com varias promisses e so quando todas forem finalizadas
    // o promise.all retorna todos os resultados em um array 
    return Promise.all([
        getRandomNumber(1, 60, 1000),
        getRandomNumber(312, 42, 500),
        getRandomNumber(1, 12, 5000),
        getRandomNumber(3, 23, 20),
    ])
}

gerarNumeros().then(console.log)