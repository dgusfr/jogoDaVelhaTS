"use strict";
// Tipos básicos
var jogoAcabou = false;
var pontuacaoX = 0;
var pontuacaoO = 0;
var jogadorAtual = "X";
var tabuleiro = Array(9).fill(null);
// Tuplas
var tuplaVencedora;
// Enums
var StatusJogo;
(function (StatusJogo) {
    StatusJogo["EmAndamento"] = "EM_ANDAMENTO";
    StatusJogo["Vitoria"] = "VITORIA";
    StatusJogo["Empate"] = "EMPATE";
})(StatusJogo || (StatusJogo = {}));
// Uso de Enums
var statusJogo = StatusJogo.EmAndamento;
// Type Assertions
var elementoTabuleiro = document.getElementById("board");
var celulas = Array.from(elementoTabuleiro.querySelectorAll(".celula"));
function verificarVencedor() {
    var combinacoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    var _loop_1 = function (combinacao) {
        var a = combinacao[0], b = combinacao[1], c = combinacao[2];
        if (tabuleiro[a] &&
            tabuleiro[a] === tabuleiro[b] &&
            tabuleiro[a] === tabuleiro[c]) {
            statusJogo = StatusJogo.Vitoria;
            jogoAcabou = true;
            var vencedor_1 = jogadorAtual === "X" ? "Jogador X" : "Jogador O";
            if (jogadorAtual === "X") {
                pontuacaoX++;
            }
            else {
                pontuacaoO++;
            }
            setTimeout(function () {
                alert("".concat(vencedor_1, " venceu!"));
                reiniciarJogo();
            }, 100);
            return { value: void 0 };
        }
    };
    for (var _i = 0, combinacoesVitoria_1 = combinacoesVitoria; _i < combinacoesVitoria_1.length; _i++) {
        var combinacao = combinacoesVitoria_1[_i];
        var state_1 = _loop_1(combinacao);
        if (typeof state_1 === "object")
            return state_1.value;
    }
    if (!tabuleiro.includes(null)) {
        statusJogo = StatusJogo.Empate;
        jogoAcabou = true;
        setTimeout(function () {
            alert("Empate!");
            reiniciarJogo();
        }, 100);
    }
}
// Utilizando Generics
function atualizarPontuacao() {
    document.getElementById("pontuacao").textContent = "Jogador (X) - ".concat(pontuacaoX, " | Jogador (O) - ").concat(pontuacaoO);
}
// Funções
function reiniciarJogo() {
    tabuleiro.fill(null);
    jogoAcabou = false;
    statusJogo = StatusJogo.EmAndamento;
    celulas.forEach(function (celula) { return (celula.textContent = ""); });
    atualizarPontuacao();
}
document.querySelectorAll(".celula").forEach(function (celula, indice) {
    celula.addEventListener("click", function () {
        if (!jogoAcabou && !tabuleiro[indice]) {
            tabuleiro[indice] = jogadorAtual;
            celula.textContent = jogadorAtual;
            verificarVencedor();
            jogadorAtual = jogadorAtual === "X" ? "O" : "X";
        }
    });
});
window.onload = reiniciarJogo;
