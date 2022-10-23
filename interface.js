// linha que irá esperar o documento carregar e logo após executar a função
document.addEventListener("DOMContentLoaded",() => {

    //armazenado o seletor dentro de uma variavel, para poder ser chamado sem dificuldades.
    let squares = document.querySelectorAll(".square");
    //funcao para pegar o evento do clicl que estão dentro do selector square, assim vc sabe onde o user clicou.
    squares.forEach((square)=>{
        square.addEventListener("click", cliqueManual)
    })
})
//função para pegar o target do evento "id"
function cliqueManual(event){
    // maneira de armazenar o id do evento e aplicalo ao movimento
    movimento(event.target.id)
    setTimeout(() => {
        if (gameOver == true) {
        alert("O Jogo Terminou o Vencedor Foi o Jogador " + symbols[playerTime]);
        }
    },10)
    
    

    atualizacaosquares();

    
}

function atualizacaosquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {

        let position = square.id;
        let symbols = gameposition[position];

        if (symbols != "") {
            square.innerHTML = `<div class='${symbols}'><\div>`
        } else {
            
        }
    });

}

