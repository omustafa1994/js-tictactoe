document.addEventListener("DOMContentLoader", () => {
});

const squares = document.getElementsByTagName("td");

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

for (let i = 0; i < squares.length; i++) {
  squares[i].getAttribute("data-num");
  squares[i].addEventListener("click", () => {
    // clicked = true;
    console.log("cone" + i);
  });
};
