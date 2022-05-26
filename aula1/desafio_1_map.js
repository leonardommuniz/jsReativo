const numeros = [
    {nome:'leonardo',peso:90},
    {nome:'joao',peso:190},
    {nome:'maria',peso:60},
]

const fn1 = (x,...y) => (y).map(num => num*2)

console.log(fn1(1,2,3,4,5,6))