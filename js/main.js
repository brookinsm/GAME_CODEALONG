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
  
  /*------ State -------*/
let board, turn, winner

//   const board = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null],
//   ];

//   let turn = 'x';
//   let winner = null;

  /*------ Logic -------*/
 init()
 function init() {
 board = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  turn = 'X'
  winner = null

    render();

 }

 function renter() {
    rednerMessage()
    renderBoard()
 }
  
