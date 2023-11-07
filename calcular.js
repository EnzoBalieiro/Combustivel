

function calcular(){

    let tempo;
    let velocidade;
    let distancia;
    let combustivel;

    tempo = parseFloat(document.querySelector('#TXTtempo').value);
    velocidade = parseFloat(document.querySelector('#TXTvelocidade').value);

    distancia = tempo * velocidade;

    combustivel = distancia / 12;

    document.querySelector('#lblConsumo').innerHTML = combustivel.toFixed(2);


}