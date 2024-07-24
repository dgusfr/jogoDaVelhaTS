# Jogo da Velha

Um simples jogo da velha desenvolvido em TypeScript, HTML e CSS, onde dois jogadores podem se divertir e competir<br></br>

para ver quem consegue alinhar três símbolos iguais em uma linha, coluna ou diagonal.

<br></br>

## Interface

<div align="center">
  <img src=".//img/logo.gif" alt="Imagem do Projeto" width="400">
</div>

<br></br>

## Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Status](#status)
- [Descrição](#descrição)
- [Funcionalidades](#funcionalidades)
- [Explicação](#explicação)
- [Como Usar](#como-usar)
- [Autor](#autor)

<br></br>
<br></br>

## Tecnologias Utilizadas

<div style="display: flex; flex-direction: row;">
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/ts.png" alt="Logo Linguagem" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/html.png" alt="Logo Linguagem" width="100"/>
  </div>
  <div style="margin-right: 20px; display: flex; justify-content: flex-start;">
    <img src="img/css.png" alt="Logo Linguagem" width="100"/>
  </div>
</div>

<br></br>

## Status

![Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge)

<br></br>

## Descrição

Este projeto é uma implementação de um clássico jogo da velha utilizando TypeScript para a lógica do jogo, HTML para a estrutura e CSS para o estilo. É uma aplicação simples e divertida que permite dois jogadores competirem para alinhar três símbolos iguais em uma linha, coluna ou diagonal.

<br></br>

## Funcionalidades

- Dois jogadores podem jogar alternadamente.
- Contagem de pontuação para cada jogador.
- Reinício automático do jogo após cada partida.

<br></br>

## Explicação

```typescript
function verificarVencedor() {
  const combinacoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const combinacao of combinacoesVitoria) {
    const [a, b, c] = combinacao;
    if (
      tabuleiro[a] &&
      tabuleiro[a] === tabuleiro[b] &&
      tabuleiro[a] === tabuleiro[c]
    ) {
      statusJogo = StatusJogo.Vitoria;
      jogoAcabou = true;
      const vencedor = jogadorAtual === "X" ? `Jogador X` : `Jogador O`;
      if (jogadorAtual === "X") {
        pontuacaoX++;
      } else {
        pontuacaoO++;
      }
      setTimeout(() => {
        alert(`${vencedor} venceu!`);
        reiniciarJogo();
      }, 100);
      return;
    }
  }
  if (!tabuleiro.includes(null)) {
    statusJogo = StatusJogo.Empate;
    jogoAcabou = true;
    setTimeout(() => {
      alert("Empate!");
      reiniciarJogo();
    }, 100);
  }
}
```

<br></br>

## Como Usar

`1.` Clone o repositório para a sua máquina local.

`2.` Abra o arquivo index.html no seu navegador.

`3.` Divirta-se jogando com um amigo.

<br></br>

## Autor

Desenvolvido por Diego Franco

CAHJGES
changes
