function calcular(n1){
    return function(n2){
        return function(operacao){
            switch (operacao) {
                case '+':
                    return n1 + n2
                case '-':
                    return n1 - n2
                case '/':
                    return n1 / n2
                case '*':
                    return n1 * n2
                default:
                    console.log('operação ainda nao cadastrada');
                    break;
            }
        }
    }
}

const somar = calcular(1)(2)('+');
const sub = calcular(2)(1)('-');
const div = calcular(14)(2)('/');
const mult = calcular(1)(2)('*');
console.log(somar);
console.log(sub);
console.log(div);
console.log(mult);