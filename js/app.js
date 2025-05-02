/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]



/*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')

// console.log(squareEls)
const messageEl = document.querySelector('#message')
// console.log(messageEl)

/*-------------------------------- Functions --------------------------------*/
function init() {
    // console.log("initialized")
    board = ['', '', '', '', '', '', '', '', ''];
    turn = "X";
    winner = false;
    tie = false;
    render()
    }
window.onload = init;

function updateBoard() {
    board.forEach((square, sqrIdx) => {
        // console.log(board)
        squareEls[sqrIdx].innerText = square;
    })
    // const square = event.target;
    // if (squareIndex.innerText === "") {
    //     squareIndex.innerText = turn;
    // }
}

function updateMessage() {
    if (winner === false && tie === false) {
        messageEl.textContent = `It is now ${turn}'s turn.`
    } else if (winner === false && tie === true) {
        messageEl.textContent = `You tied!  Try again?`
    } else {
        messageEl.textContent = `Congratulations!  ${turn} has won!`
    }
}

function render() {
    updateBoard();
    updateMessage();
}

function handleClick(event) {
    // console.log("click handled")
    // console.log(event.target)
    const squareIndex = parseInt(event.target.id);
    console.log(squareIndex)
    if (board[squareIndex] === "X" || board[squareIndex] === "O") {
        return;
    } else if (winner === true) {
        return;
    }
    // console.log("click handled 2")
    placePiece(squareIndex)
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    console.log(turn)
    render();
}

function placePiece(index) {
    board[index] = turn;
    // console.log(board)
}

function checkForWinner() {
    if (
        // rows
        board[0] !== "" && board[0] === board[1] && board[1] === board[2] ||
        board[3] !== "" && board[3] === board[4] && board[4] === board[5] ||
        board[6] !== "" && board[6] === board[7] && board[7] === board[8] ||
        // diagonals
        board[0] !== "" && board[0] === board[4] && board[4] === board[8] ||
        board[2] !== "" && board[2] === board[4] && board[4] === board[6] ||
        // columns
        board[0] !== "" && board[0] === board[3] && board[3] === board[6] ||
        board[1] !== "" && board[1] === board[4] && board[4] === board[7] ||
        board[2] !== "" && board[2] === board[5] && board[5] === board[8] 
    ) 
        {
            winner = true;
            // console.log(winner)
        }
}

function checkForTie() {
    if (winner === true) {
        tie = false;
        return;
    } 
    const fullBoard = board.every(square => square !== "");
    tie = fullBoard;
}

function switchPlayerTurn() {
    if (winner === true) {
        return;
    } 
    if (turn === "X") {
        turn = "O"
    } else if (turn === "O") {
        turn = "X";
    }
}
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(square => {
    square.addEventListener('click', handleClick)
   
})


/*----------------------------- Minimum Requirements -----------------------------*/
/*
1. Display an empty tic-tac-toe board when the page is initially displayed.
2. A player can click on the nine cells to make a move.
3. Every click will alternate between marking an X and O.
4. Display whose turn it is (X or O).
5. The cell cannot be played again once occupied with an X or O.
6. Provide win logic and display a winning message.
7. Provide logic for a cat’s game (tie), also displaying a message.
8. Provide a Reset Game button that will clear the contents of the board.
*/

/*----------------------------- PseudoCode -----------------------------*/
/* 
//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

*/ 