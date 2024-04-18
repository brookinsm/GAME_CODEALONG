const prompt = require('prompt-sync')();

console.log('Welcome to Tic Tac Toe!');

/*------ State -------*/

const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' '],
];

// Reference on how to access spaces on the board
// console.log(board[2][2]);

const player1 = 'X';
const player2 = 'O';
let turn = 'X';
let winner = null; // could be 'X' or 'O' depending on player win, or 'T'

/*------ Logic -------*/
main();

// main gameplay loop
function main() {
  // until the game is won or tied, the game will continue
  while (!winner) {
    renderBoard();
    console.log(
      'Please select the row and column that you would like to play'
    );

    let row, col;
    while (!row || row > 3 || row < 1) {
      row = prompt('Select row: ');
      row = parseInt(row);
    }

    while (!col || col > 3 || col < 1) {
      col = prompt('Select column: ');
      col = parseInt(col);
    }

    console.log('row: ', typeof row);
    console.log('col ', typeof col);

    winner = 'X';
  }
}

function renderBoard() {
  console.log(' 1 |2| 3');
  console.log(`1 ${board[0][0]}|${board[0][1]}|${board[0][2]}`);
  console.log(' --|-|--');
  console.log(`2 ${board[1][0]}|${board[1][1]}|${board[1][2]}`);
  console.log(' --|-|--');
  console.log(`3 ${board[2][0]}|${board[2][1]}|${board[2][2]}`);
}