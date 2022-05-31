const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname,'dados.txt')

function exibirConteudo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, (_, conteudo)=> resolve(conteudo.toString()))
    })
}

exibirConteudo(caminho).then(console.log)

