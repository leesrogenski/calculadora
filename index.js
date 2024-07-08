// Projeto calculadora - Lions / Noturno. 

const prompt = require('prompt-sync')();

// Definir uma variável para apresentar o resultado aos usuários. 
let resultado;

// Criar funções para as operações matemáticas, e definir seus parâmetros.

function soma(a, b) {
    return a + b;
}

function menos(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}

function porcentagem(numero, percentual) {
    return (percentual / 100) * numero;
}

// Função principal para realizar os cálculos dos usuários.

function calcular() {
     
    // Definir uma variável para solicitar aos usuários a operação matemática do cálculo. 
    let operacao = prompt("Escolha uma operação matemática para o cálculo (+, -, *, /, %): ");

    // switch case para os cálculos básicos de matemática (adição, subtração, multiplicação, divisão).

    switch (operacao) {
        case "+":
        case "-":
        case "*":
        case "/":

            // Definindo duas variáveis para solicitar aos usuários dois números para o cálculo. 
            let numero1 = parseFloat(prompt('Insira o primeiro número para o cálculo: '));
            let numero2 = parseFloat(prompt('Insira o segundo número para o cálculo: '));

            switch (operacao) {
                case "+":
                    // Chamada da função e da variável 'resultado' para o cálculo dos dois dígitos informados. 
                    resultado = soma(numero1, numero2);

                    // console.log para apresentar o resultado da operação na tela. 
                    console.log(`${numero1} + ${numero2} = ${resultado}`);
                    break;

                case "-":
                    resultado = menos(numero1, numero2);
                    console.log(`${numero1} - ${numero2} = ${resultado}`);
                    break;

                case "*":
                    resultado = multiplicar(numero1, numero2);
                    console.log(`${numero1} x ${numero2} = ${resultado}`);
                    break;
                
                case "/":
                    resultado = dividir(numero1, numero2);
                    console.log(`${numero1} / ${numero2} = ${resultado}`);
                    break;

                default:
                    // Em caso de dados inválidos, insirir uma mensagem na tela. 
                    console.log("Dados inválidos, tente novamente. ")
                    break;
            }

            break;

            case "%":
                // Definir duas variáveis para solicitar um número para descobrir o cálculo da porcentagem. 

                let numero = parseFloat(prompt("Insira o número para calcular a porcentagem: "));
                let percentual = parseFloat(prompt("Insira o percentual: "));
                // Chamada da função 'porcentagem' para realizar o cálculo. 

                resultado = porcentagem(numero, percentual);
                console.log(`O resultado da operação da porcentagem entre ${numero} e ${percentual} é ${resultado}`)
            break;

            default:
                console.log("Dados inválidos. Tente novamente. ");
                break;
    }

}

// Chamada da função principal (calcular), para apresentar o resultado aos usuários. 

calcular();