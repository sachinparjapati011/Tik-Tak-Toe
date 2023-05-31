let check=document.querySelectorAll('.check');
let result=document.querySelector('#result');
let button=document.querySelector('#btn');
let winning = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let board=['','','','','','','','',''];
let player1='O';
let isGameStart=true;
start();
function start()
    {
        check.forEach(check => check.addEventListener("click", cellcheck));
        button.addEventListener("click",replay);
        
    result.textContent = `${player1}'s turn`;
        isGameStart=false;
    }
    function cellcheck() {
        let box = this.getAttribute("id");

        if (board[box] != "" || isGameStart) {
            return;
        }

        update(this,box);
        Winner();
    }
    function update(check, index) {
        board[index] = player1;
        check.textContent = player1;
    }
    function Player() {
        player1 = (player1 == "O") ? "X" : "O";
        result.textContent = `${player1}'s turn`;
    }
    function Winner() {
        let roundWon = false;

        for (let i = 0; i < winning.length; i++) {
            let possibilites= winning[i];
            let box1= board[possibilites[0]];
           let box2=board[possibilites[1]];
            let box3 = board[possibilites[2]];

            if (box1 == "" || box2 == "" || box3 == "") {
                continue;
            }
            if (box1== box2 && box2== box3) {
                roundWon = true;
                break;
            }
        }

        if (roundWon) {
            result.textContent = `${player1} won!`;
            alert(`${player1} won`);
           isGameStart=true;
        }
        else if (!board.includes("")) {
            result.textContent = `Draw the Match!`;
            alert("Match will be draw!do you continue it?");
            isGameStart=true;
        }
        else {
            Player();
            
        }
    }
    function replay() {
        player1 = "O";
        board = ["", "", "", "", "", "", "", "", ""];
        result.textContent = `${player1}'s turn`;
        check.forEach(check => check.textContent = "");
        isGameStart = false;
    }

