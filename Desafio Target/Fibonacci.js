function pertenceFibonacci(numero) {
    var fib1 = 0, fib2 = 1;

    
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    
    while (fib2 < numero) {
        var temp = fib1;
        fib1 = fib2;
        fib2 = temp + fib2;
    }

    
    if (fib2 === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}


var numero = parseInt(prompt("Informe um número:"));
console.log(pertenceFibonacci(numero));
