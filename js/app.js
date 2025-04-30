/*-------------------------------- Constants --------------------------------*/



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
    console.log("initialized")
    board = [
        ['A','B','C'],
        ['','',''],
        ['','',''],
        ];
    turn = "X";
    winner = false;
    tie = false;
    render()
    }
window.onload = init;

function updateBoard() {
    board.flat().forEach((square, squareIndex) => {
        console.log(board)
        squareEls[squareIndex].innerText = square;
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
/*----------------------------- Event Listeners -----------------------------*/
// squareEls.forEach(square => {
//     square.addEventListener('click', updateBoard)
// })


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