let gameposition = ["", "", "", "", "", "","","",""];
let playerTime = 0;
let symbols = ["O","X"];
let textPlayerTime = document.getElementById("playerTime")
let gameOver = false;
//sequencias vencedoras
let winStates = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
   [0, 4, 8],
   [2, 4, 6],
];

let velha = [
    []
]

function movimento(position){
    

    if (gameOver) {
        return;
    }

    if(gameOver == false){
        if (gameposition[position] == ""){
            gameposition[position] = symbols[playerTime];

            gameOver = insWin();

            if(gameOver == false){

                if (playerTime == 0) {
                    playerTime = 1;
                } else {
                    playerTime = 0;
                }

                textPlayerTime.innerHTML = symbols[playerTime];
            }

        }   
    }

}

function insWin(){
   

    for (let i = 0; i < winStates.length; i++) {
        let seq = winStates[i];

        //verificação das seuquencias do isWin
        let position1 = seq[0];
        let position2 = seq[1];
        let position3 = seq[2];
        
        //se i elemento da game posicion na posição um for igual ao elemento na game position dois e igual ao gameposition na posicao tres
        if(gameposition[position1] == gameposition[position2] 
            &&
            gameposition[position1] == gameposition[position3] 
            &&
            gameposition[position1] != "")
            {
                return true;
            }
    }
    return false
}

