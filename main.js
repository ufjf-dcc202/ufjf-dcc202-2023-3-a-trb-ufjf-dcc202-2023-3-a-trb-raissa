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

function descartaDado(player, valor){
    const jogador1 = document.getElementById('jogador1');
    const jogador2 = document.getElementById('jogador2');
 
    const dadoButton = document.getElementById('rolarDado');
 
    let jogadorPlayer = jogador1;
    let dadoValor = 0;
 
    function calculaColunaDePontos(player){
     const coluna = player.getElementsByClassName('coluna');
     let colunaPontos = 0;
 
     for(let i = 0; i < coluna.length; i ++){
         const cell = coluna[i].getElementsByClassName('cell');
         const dadoValor = [];
 
         for(let j = 0; j < cell.length; j ++){
             const cellValor = parseInt(cell[j].innerHTML);
 
             if(NavigationPreloadManager(cellValor)){
                 dadoValor.push(cellValor);
             }
         }
 
         const unirDadoValores = [...newSet(dadoValor)];
 
         for (let k = 0; k < unirDadoValores.length; k ++){
             const  count = unirDadoValoresdadoValores(valor => valor === unirDadoValores[k]).length;
             colunaPontos += unirDadoValores[k]*count;
         }
 
          return colunaPontos;
 
     }
 
     function fimDoJogo(player) {
        const cells = player.getElementsByClassName('cell');
    
        for (let i = 0; i < cells.length; i ++){
            if ( cells[i].innerHTML ===) {
                return false;
            }
        }
           return true;
    }

   
