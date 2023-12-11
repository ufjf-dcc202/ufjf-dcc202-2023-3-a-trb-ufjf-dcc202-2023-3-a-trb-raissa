//main.js

let pontosDoJogador1 = 0;
let pontosDoJogador2 = 0;


function calcularPontuacao(tabuleiroId) {
    const tabuleiro = document.getElementById(tabuleiroId);
    const cells = tabuleiro.getElementsByClassName('cell');
    
    let pontuacao = 0;

    for (let coluna = 0; coluna < 3; coluna++) {
        let produto = 1;
        for (let linha = 0; linha < 3; linha++) {
            const indice = coluna + linha * 3;
            const valor = parseInt(cells[indice].textContent || 0);
            produto *= valor;
        }
        pontuacao += produto;
    }

    return pontuacao;
}

function atualizarPontosJogadores() {
    pontosJogador1 = calcularPontuacao('tabuleiro1');
    pontosJogador2 = calcularPontuacao('tabuleiro2');

    document.getElementById('pontosJogador1').textContent = pontosJogador1;
    document.getElementById('pontosJogador2').textContent = pontosJogador2;
}

// Exemplo de chamada de função para atualizar pontos
atualizarPontosJogadores();