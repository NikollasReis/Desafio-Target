
const faturamentoDiario = [
    {"dia": 1, "valor": 22174.16},
    {"dia": 2, "valor": 24537.66},
    {"dia": 3, "valor": 26139.61},
    {"dia": 4, "valor": 26742.66},
    {"dia": 5, "valor": 24671.63},    
    {"dia": 6, "valor": 0.0},
    {"dia": 7, "valor": 0.0},

];


function analisarFaturamento(dados) {
    let menorValor = Infinity;
    let maiorValor = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;


    dados.forEach(dia => {
        if (dia.valor > 0) {
            
            if (dia.valor < menorValor) menorValor = dia.valor;
            if (dia.valor > maiorValor) maiorValor = dia.valor;
            somaFaturamento += dia.valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = somaFaturamento / diasComFaturamento;

    const diasAcimaDaMedia = dados.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}

const resultado = analisarFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento: ${resultado.menorValor}`);
console.log(`Maior valor de faturamento: ${resultado.maiorValor}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
