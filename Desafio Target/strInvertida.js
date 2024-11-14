
function inverterString(str) {
    var resultado = ""; 
    for (var i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

var inputUsuario = prompt("Digite uma string para inverter:");
var stringDoUsuarioInvertida = inverterString(inputUsuario);
console.log("String invertida do usuário:", stringDoUsuarioInvertida);
