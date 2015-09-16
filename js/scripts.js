var turn = "X";

function startGame()  {
  alert( turn + " gets to start.");
};

var switchPlayer = function() {
  if (turn === "X") {
    turn = "O";
  } else {
    turn = "X"
  }
}


function nextMove(square) {
  square.innerText = turn;
  switchPlayer();
}
