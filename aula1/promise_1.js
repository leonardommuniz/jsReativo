new Promise(resolve =>{
    return resolve(['Ana','Leo','Pedro','Maria'])
}).then(resolve => resolve[1])
.then(resolveDeCima => resolveDeCima[1])
.then(resolveDeCima => resolveDeCima.toLowerCase())
.then(console.log)
