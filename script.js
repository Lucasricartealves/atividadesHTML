document.addEventListener("DOMContentLoaded", function() {
    console.log("JS carregado e DOM pronto!");

    // alterar a cor da linha
    function alterarCorLinha(id) {
        document.querySelectorAll("tr").forEach(linha => linha.classList.remove("linha-alterada"));
        document.getElementById(id).classList.add("linha-alterada");
    }

    // exibir o nome do time
    function exibirNomeTime(id) {
        let linha = document.getElementById(id);
        let nomeTime = linha.querySelector('td:nth-child(3) a').innerText;
        let mensagem = "";

        if (nomeTime === "Botafogo") mensagem = "Só entrega";
        else if (nomeTime === "Palmeiras") mensagem = "Mancha rosa sem mundial";
        else if (nomeTime === "Flamengo") mensagem = "Só fica no cheirinho";

        alert(mensagem);
    }

    // destaca a linha quando o mouse passar
    function destacarLinha(linha) {
        linha.classList.add("linha-destaque");
    }

    // remove o destaque quando o mouse sair
    function removerDestaque(linha) {
        linha.classList.remove("linha-destaque");
    }

    // Tornando as funções globais para serem usadas no HTML
    window.alterarCorLinha = alterarCorLinha;
    window.exibirNomeTime = exibirNomeTime;
    window.destacarLinha = destacarLinha;
    window.removerDestaque = removerDestaque;
});
