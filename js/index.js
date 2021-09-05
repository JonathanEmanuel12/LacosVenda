var pergunta1 = {
    questao: "1) Mercúrio é um metal que em temperatura ambiente é se mantém no estado líquido. Em qual dos equipamentos/ferramentas abaixo o mercúrio é utilizado?",
    respostas: ["Tesoura", "Termomêtro", "Picareta", "Óculos", "Borracha"],
    correto: 2
};

var pergunta2 = {
    questao: "2) Qual dos estados abaixo possui a maior produção de queijo do Brasil?",
    respostas: ["Minas Gerais", "São Paulo", "Mato Grosso", "Ceará", "Rondônia"],
    correto: 1
};

var pergunta3 = {
    questao: "3) Qual o santo(a) padroeiro do Brasil?",
    respostas: ["Santa Teresa de Jesus", "São Pedro", "São Paulo", "Nossa Senhora da Conceição Aparecida", "Santa Luzia"],
    correto: 4
};

var pergunta4 = {
    questao: "4) Quantas cidade o estado de Minas Gerais possui?",
    respostas: ["500 cidades", "358 cidades", "652 cidades", "471 cidades", "306 cidades"],
    correto: 4
};

var pergunta5 = {
    questao: "5) Qual o nome do alimento que possui frango e farinha de trigo em sua composição e que possui a forma de uma gota ",
    respostas: ["Pizza", "Pastel", "Coxinha", "Strogonoff", "Lasanha"],
    correto: 3
};

var arrayPerguntas = [pergunta1, pergunta2, pergunta3, pergunta4, pergunta5];
var nQuestao = 0;

var btnResposta1 = document.getElementById("resposta1");
btnResposta1.addEventListener("click", function(e) { verificar(1) }); 

var btnResposta2 = document.getElementById("resposta2");
btnResposta2.addEventListener("click", function(e) { verificar(2) });

var btnResposta3 = document.getElementById("resposta3");
btnResposta3.addEventListener("click", function(e) { verificar(3) });

var btnResposta4 = document.getElementById("resposta4");
btnResposta4.addEventListener("click", function(e){ verificar(4) });

var btnResposta5 = document.getElementById("resposta5");
btnResposta5.addEventListener("click", function(e) { verificar(5); });

var containerRespostas = document.getElementById("containerRespostas");
var setaSeguir = document.getElementById("setaSeguir");

function verificar(nResposta) {
    if(!(arrayPerguntas[nQuestao].correto == nResposta)) {
        pintar(arrayPerguntas[nQuestao].correto, "verde");
        document.getElementById("resposta" + arrayPerguntas[nQuestao].correto).innerHTML += '<i id="verde" class="fas fa-check"></i>';
        pintar(nResposta, "vermelho");
        document.getElementById("resposta" + nResposta).innerHTML += '<i id="vermelho" class="fas fa-times"></i>';
    } else {
        pintar(nResposta, "verde");
        document.getElementById("resposta" + nResposta).innerHTML += '<i id="verde" class="fas fa-check"></i>';
    }

    containerRespostas.style.pointerEvents = "none";
    setaSeguir.style.color = "#ffff7a";

}

function iniciarPergunta() {
    if(nQuestao <=4) {
        document.getElementById("questao").innerHTML = '<p>' + arrayPerguntas[nQuestao].questao + '</p>';
        btnResposta1.innerHTML = '<p>' + arrayPerguntas[nQuestao].respostas[0] + '</p>';
        btnResposta2.innerHTML = '<p>' + arrayPerguntas[nQuestao].respostas[1] + '</p>';
        btnResposta3.innerHTML = '<p>' + arrayPerguntas[nQuestao].respostas[2] + '</p>';
        btnResposta4.innerHTML = '<p>' + arrayPerguntas[nQuestao].respostas[3] + '</p>';
        btnResposta5.innerHTML = '<p>' + arrayPerguntas[nQuestao].respostas[4] + '</p>';
    } else {
        document.getElementById("questao").innerHTML = '<p> Obrigado por testar! </p>';
        containerRespostas.innerHTML = " ";
    }
}

function pintar(nResposta, cor) {
    var resposta = document.getElementById("resposta" + nResposta);
    resposta.style.borderWidth = "2px";
    if(cor == "verde") {
        resposta.style.borderColor = "#17ff00";
        resposta.style.backgroundColor = "#b2ff9a";
    } else {
        resposta.style.borderColor = "#fb190e";
        resposta.style.backgroundColor = "#ff9f85";
    }
}

function despintar() {
    for(var i = 1; i <= 5; i++) {
        var resposta = document.getElementById("resposta" + i);
        resposta.style.borderWidth = "1px";
        resposta.style.borderColor = "#000";
        resposta.style.backgroundColor = "#fff";
    }
}

iniciarPergunta();

var btnSeguir = document.getElementById("seguir");
btnSeguir.addEventListener("click", resetarQuestao);

function resetarQuestao() {
    if(containerRespostas.style.pointerEvents == "none") {
       nQuestao += 1;
       containerRespostas.style.pointerEvents = "auto";
       setaSeguir.style.color = "#6a6a6a";
       despintar();
       iniciarPergunta();
    }
}