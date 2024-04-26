/*------ Lookup Data / Constants -------*/
const WINNING_COMBOS = [
    [
      { row: 0, col: 0 },
      { row: 0, col: 1 },
      { row: 0, col: 2 },
    ],
    [
      { row: 1, col: 0 },
      { row: 1, col: 1 },
      { row: 1, col: 2 },
    ],
    [
      { row: 2, col: 0 },
      { row: 2, col: 1 },
      { row: 2, col: 2 },
    ],
    [
      { row: 0, col: 0 },
      { row: 1, col: 0 },
      { row: 2, col: 0 },
    ],
    [
      { row: 0, col: 1 },
      { row: 1, col: 1 },
      { row: 2, col: 1 },
    ],
    [
      { row: 0, col: 2 },
      { row: 1, col: 2 },
      { row: 2, col: 2 },
    ],
    [
      { row: 0, col: 0 },
      { row: 1, col: 1 },
      { row: 2, col: 2 },
    ],
    [
      { row: 0, col: 2 },
      { row: 1, col: 1 },
      { row: 2, col: 0 },
    ],
  ];

  /*----Cached Elements----*/
  const messageEl = document.querySelector('h3.message-header');
  
  /*------ State -------*/
  let board, turn, winner;
  
  /*------ Logic -------*/
  init();
  
  function init() {
    board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  
    turn = 'X';
    winner = null;
  
    render();
  }
  
  function render() {
    renderMessage();
    renderBoard();
  }
  
  function renderMessage() {
    if (winner === 'T') {
      messageEl.innerText = "It's a tie game!!";
    } else if (!winner) {
      messageEl.innerText = `It is ${turn}'s turn`;
    } else {
      messageEl.innerText = `Player ${winner} won!`;
    }
  }

  function renderBoard() {
    board.forEach((row, rowIdx) => {
      row.forEach((col, colIdx) => {
        document.getElementById(`r${rowIdx}c${colIdx}`).innerText = col
          ? col
          : '';
      });
    });
  }