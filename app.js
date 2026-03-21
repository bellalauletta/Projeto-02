let titulo = document.querySelector("h1");
    titulo.innerHTML = "hora do desafio";

    function verificarBotaoChute() { 
        console.log("o botão foi clicado")
    }

    function verificarBotaoAlerta() {
        alert("Eu amo JS")
    }
    function exibirPrompt () {
        let nomeDaCidade = prompt("Qual o nome da cidade que você mora?")
        alert (`Estive em ${nomeDaCidade} e lembrei de você!`)
    }
        function somaNumeros() {
            let valor1 = parseInt(prompt("Digite um número:"));
            let valor2 = parseInt(prompt("Digite outro número:"));
            let resultado = valor1 + valor2;
            alert(`A soma de ${valor1} e ${valor2} é ${resultado}`);
        }

