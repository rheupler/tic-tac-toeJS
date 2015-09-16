function setMessage (msg) {
  document.getElementById("message-turn").innerText = msg
}

function switchPlayer() {
  if (turn === "X") {
    turn = "O";
    computerTurn();
  } else {
    turn = "X"
  }
  setMessage("It's " + turn + "'s turn")
}

// var computerChoices = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
// var pickChoice = function() {
//   var choice = computerChoices[Math.floor(Math.random() * 9)];
//   return choice;
// };
//
// function computerTurn() {
//   var result = pickChoice();
//   if (game.xTurn.indexOf(result) === -1) {
//     game.oTurn.push(result)
//     document.getElementById(result).innerText = turn;
//     turn = "X";
//   }
// }
//
function nextMove(square) {
  if (square.innerText !== "") {
    alert("Pick another space.")
  } else {
  square.innerText = turn;
  switchPlayer();
  }
}

function Game() {
  this.xTurn = [];
  this.oTurn = [];
}

var turn = "X";

var game = new Game();


$(function() {
  $(".square").click(function(event){
    event.preventDefault();

    var selectedSquare = $(this).attr('id');

    if (turn === "O") {
    game.xTurn.push(selectedSquare);
  } else {
    game.oTurn.push(selectedSquare);
  }

  if ((game.oTurn.indexOf('1') > -1) && (game.oTurn.indexOf('2') > -1) && (game.oTurn.indexOf('3') > -1)) {
    alert("O WINS");
  } else if ((game.oTurn.indexOf('4') > -1) && (game.oTurn.indexOf('5') > -1) && (game.oTurn.indexOf('6') > -1)) {
    alert("O WINS")
  } else if ((game.oTurn.indexOf('7') > -1) && (game.oTurn.indexOf('8') > -1) && (game.oTurn.indexOf('9') > -1)) {
    alert("O WINS")
  } else if ((game.oTurn.indexOf('1') > -1) && (game.oTurn.indexOf('4') > -1) && (game.oTurn.indexOf('7') > -1)) {
    alert("O WINS")
  } else if ((game.oTurn.indexOf('2') > -1) && (game.oTurn.indexOf('5') > -1) && (game.oTurn.indexOf('8') > -1)) {
    alert("O WINS")
  } else if ((game.oTurn.indexOf('3') > -1) && (game.oTurn.indexOf('6') > -1) && (game.oTurn.indexOf('9') > -1)) {
    alert("O WINS")
  } else if ((game.oTurn.indexOf('1') > -1) && (game.oTurn.indexOf('5') > -1) && (game.oTurn.indexOf('9') > -1)) {
    alert("O WINS")
  } else if ((game.oTurn.indexOf('3') > -1) && (game.oTurn.indexOf('5') > -1) && (game.oTurn.indexOf('7') > -1)) {
    alert("O WINS")
  } else if ((game.xTurn.indexOf('1') > -1) && (game.xTurn.indexOf('2') > -1) && (game.xTurn.indexOf('3') > -1)) {
    alert("X WINS");
  } else if ((game.xTurn.indexOf('4') > -1) && (game.xTurn.indexOf('5') > -1) && (game.xTurn.indexOf('6') > -1)) {
    alert("X WINS")
  } else if ((game.xTurn.indexOf('7') > -1) && (game.xTurn.indexOf('8') > -1) && (game.xTurn.indexOf('9') > -1)) {
    alert("X WINS")
  } else if ((game.xTurn.indexOf('1') > -1) && (game.xTurn.indexOf('4') > -1) && (game.xTurn.indexOf('7') > -1)) {
    alert("X WINS")
  } else if ((game.xTurn.indexOf('2') > -1) && (game.xTurn.indexOf('5') > -1) && (game.xTurn.indexOf('8') > -1)) {
    alert("X WINS")
  } else if ((game.xTurn.indexOf('3') > -1) && (game.xTurn.indexOf('6') > -1) && (game.xTurn.indexOf('9') > -1)) {
    alert("X WINS")
  } else if ((game.xTurn.indexOf('1') > -1) && (game.xTurn.indexOf('5') > -1) && (game.xTurn.indexOf('9') > -1)) {
    alert("X WINS")
  } else if ((game.xTurn.indexOf('3') > -1) && (game.xTurn.indexOf('5') > -1) && (game.xTurn.indexOf('7') > -1)) {
    alert("X WINS")
  } else if (((game.xTurn.length === 4) && (game.oTurn.length === 5)) || ((game.oTurn.length === 4) && (game.xTurn.length === 5))) {
    alert("Cat's Game")
  }
  });

});

$(function() {
  $("#refresh").click(function(event) {
    window.location.reload();
  })
})
