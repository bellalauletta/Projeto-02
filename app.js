//let titulo = document.querySelector("h1");
    //titulo.innerHTML = "Jogo do número secreto";

//let paragrafo = document.querySelector("p");
     // paragrafo.innerHTML = "Tente advinhar o número secreto entre 1 e 10";
    
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
    }
exibirTextoNaTela("h1", "Jogo do número secreto");
exibirTextoNaTela("p", "Tente advinhar o número secreto entre 1 e 10");


    function verificarChute() { 
        console.log("o botão foi clicado")
    }
    