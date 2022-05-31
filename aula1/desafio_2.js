// Desafio
// 1. filtrar pelo produtos q são frageis.
// 2. calcular o total de cada item -> qtd * preco.
// 3. calcular a media dos totais.

const carrinho = [
    {nome:'Caneta', qtd:3, preco: 5.00, fragil: false},
    {nome:'Impressora', qtd:2, preco:74.90, fragil: true},
    {nome:'Caderno', qtd:23, preco:20.50, fragil: false},
    {nome:'Lapis', qtd:12, preco:3.75, fragil: false},
    {nome:'Tesoura', qtd:32, preco:20.00, fragil: false},
    {nome:'Ventilador', qtd:1, preco:174.90, fragil: true},
]

const getMedia = (prev,el) => {
    novoQtd = prev.qtd + 1
    novoTotal = prev.total + el
    return {
        qtd : novoQtd,
        total : novoTotal,
        media :  novoTotal / novoQtd
    }
}

const media = carrinho.filter(el => !el.fragil)
.map(el => el.qtd * el.preco)
.reduce(getMedia, {qtd:0, total:0, media:0})


console.log(media)