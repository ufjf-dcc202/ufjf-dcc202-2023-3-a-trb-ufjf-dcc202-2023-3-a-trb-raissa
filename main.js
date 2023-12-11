//main.js

const jogador1 = document.getElementById('jogador1');
const jogador2 = document.getElementById('jogador2');

const dadoButton = document.getElementById('rolarDado');

let jogadorPlayer = jogador1;
let valorDoDado = 0;

let pontosDoJogador1 = 0;
let pontosDoJogador2 = 0;

dadoButton.addEventListener('click', rolarDado);

function dado() {
    valorDoDado = Math.floor (Math.random()*6)+1;
    jogadorPlayer.getElementsByClassName('cell')[0].innerHTML = valorDoDado;

    const jogador2 = jogadorPlayer === jogador1 ? jogador2:jogador1;

    if(jogadorPlayer === jogador1){
        pontosDoJogador1 += calculaColunaDePontos(jogadorPlayer)
    }else{
        jogador2 += calculaColunaDePontos(jogadorPlayer)
    }

    if(fimDoJogo(jogadorPlayer)){
        jogarNovamente();
    }else{
        jogadorPlayer = jogadorPlayer === jogador1 ? jogador2:jogador1;
    }
}


