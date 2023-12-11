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
    valorDoDado = Math.floor(Math.random()*6)+1;
    jogadorPlayer.getElementsByClassName('cell')[0].innerHTML = valorDoDado;

    const jogadorOponente = jogadorPlayer === jogador1 ? jogador2:jogador1;

    if(jogadorPlayer === jogador1){
        pontosDoJogador1 += calculaColunaDePontos(jogadorPlayer)
    }else{
        jogador2 += calculaColunaDePontos(jogadorOponente)
    }

    if(fimDoJogo(jogadorPlayer)){
        jogarNovamente();
    }else{
        jogadorPlayer = jogadorOponente;
    }
}

function descartaDado(jogadorPlayer, dadoValor){
    const jogador1 = document.getElementById('jogador1');
    const jogador2 = document.getElementById('jogador2');
 
    const dadoButton = document.getElementById('rolarDado');
 
    let jogadorPlayer = jogador1;
    let dadoValor = 0;
 
    function calculaColunaDePontos(player){
     const colunas = player.querySelectorsAll('.coluna');
     let colunaPontos = 0;
 
     for(let i = 0; i < colunas.length; i ++){
         const cells = colunas[i].querySelectorsAll('.cell');
         const dadoValores = [];
 
         for(let j = 0; j < cells.length; j ++){
             const cellValor = parseInt(cells[j].innerHTML);
 
             if(!isNaN(cellValor)){
                 dadoValores.push(cellValor);
             }
         }
 
         const unirDadoValores = [...new Set(dadoValores)];
 
         for (let k = 0; k < unirDadoValores.length; k ++){
             const  count = dadoValores.filter(valor => valor === unirDadoValores[k]).length;
             colunaPontos += unirDadoValores[k]*count;
         }
 
          return colunaPontos;
 
     }
 
     function fimDoJogo(player) {
        const cells = player.querySelectorsAll('.cell');
    
        for (let i = 0; i < cells.length; i ++){
            if (!cells[i].innerHTML) {
                return false;
            }
        }
           return true;
    }

    function jogarNovamente () {
        dadoButton.disabled = true;
    
        const jogador1Pontos = document.createElement('p');
        jogador1Pontos.innerHTML = `Pontuação do Jogador 1 : ${jogador1Pontos}`;
        jogador1.appendChild(jogador1Pontos);
    
        const jogador2Pontos = document.createElement('p');
        jogador2Pontos.innerHTML = `Pontuação do Jogador 2 : ${jogador2Pontos}`;
        jogador2.appendChild(jogador2Pontos);
    }

}

