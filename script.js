function mostrarReflexao() {

    let mensagem = document.getElementById("mensagem");

    if (mensagem.innerHTML === "Clique no botão para descobrir uma reflexão.") {

        mensagem.innerHTML =
            "A Inteligência Artificial pode ajudar o estudante a aprender, mas o conhecimento acontece quando ele também questiona, pesquisa e constrói suas próprias ideias.";

    } else {

        mensagem.innerHTML =
            "A tecnologia pode fornecer respostas. Porém, aprender envolve entender por que aquela resposta faz sentido.";

    }
}
