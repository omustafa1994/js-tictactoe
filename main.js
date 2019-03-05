document.addEventListener("DOMContentLoader", () => {
});

const squares = document.getElementsByTagName("td");
let turn = true;

// const playerOne = new Player("X");
// const playerTwo = new Player("O");

// if (turn === true) {
//   squares.playerOne.addPlayerOne();
// }
// else if (turn === false) {
//   squares.playerTwo.addPlayerTwo();
// }

const winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const addPlayerOne = (i) => {
  squares[i].innerText = "X";
  squares[i].classList = "X";
}

const addPlayerTwo = (i) => {
  squares[i].innerText = "O";
  squares[i].classList = "O";
}

for (let i = 0; i < squares.length; i++) {
  squares[i].getAttribute("data-num");
  squares[i].addEventListener("click", () => {
    console.log("Test Click" + i);
    addPlayerOne(i);
    addPlayerTwo(i);
  });
};