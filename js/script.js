/*

    1. Gerar um número aleatório entre 1 e 100 e armazená-lo em uma variável. OK
    2. Definir o número máximo de tentativas (ex: 10).
    3. Inicializar o contador de tentativas.
    4. Capturar o valor inserido no input (palpite do jogador).
    5. Validar se o palpite é um número válido entre 1 e 100.
    6. Comparar o palpite com o número secreto e exibir uma mensagem:
    7. Decrementar o contador de tentativas.
        7.1 Limpar o Input Number
    8. Exibir o número de tentativas restantes.
    9. Se o jogador atingir o número máximo de tentativas, o jogo termina com a mensagem "Você perdeu! O número secreto era X".


*/


// Funções Utilitarias

const gerarNumeroAleatorio = () => Math.floor(Math.random() * 100) + 1;
const obterElemento = (id) => document.getElementById(id)
const obterPalpite = () => obterElemento("palpite").value;
const limparInput = () => obterElemento("palpite").value = ""


const numeroAleatorio = gerarNumeroAleatorio();



let tentativas = 5;



function darPalpite() {


    const palpite = obterPalpite()
    const dica = obterElemento("dica")
    const campoTentativas = document.getElementById("campoTentativa");


    if (palpite < 1 || palpite > 100) {
        alert("Erro: Por favor Insira um valor em 1 e 100.")
        return;
    }


    if (palpite > numeroAleatorio) {
        dica.textContent = `Você Errou - O Número Misterioso é MENOR que ${palpite}.`;
        limparInput()
    } else if (palpite < numeroAleatorio) {
        dica.textContent = `Você Errou - O Número Misterioso é MAIOR que ${palpite}.`
        limparInput()
    } else {
        alert(`Parabens! Você acertour, o numero misterioso era ${numeroAleatorio}`)
        window.location.reload();
        return;
    }

    tentativas--
    campoTentativas.textContent = `Vidas Restantes: ${tentativas}`

    if (tentativas === 0) {
        alert(`Você Perdeu, o numero misterioso era ${numeroAleatorio}`)
        window.location.reload();
    }


}





