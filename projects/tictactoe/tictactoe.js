
var buttons = document.querySelectorAll(".box");

let move = true;


function handleClick(button) {

    if (move) {
        this.innerHTML = "X";
    } else {
        this.innerHTML = "O";
    };
    
    move = !move;
    this.disabled = true;
    isGameOver();
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", handleClick);
}

document.getElementById("play-again").addEventListener("click", handlePlayAgainClick);
function handlePlayAgainClick() {
    document.getElementById("1").innerHTML = "";
    document.getElementById("2").innerHTML = "";
    document.getElementById("3").innerHTML = "";
    document.getElementById("4").innerHTML = "";
    document.getElementById("5").innerHTML = "";
    document.getElementById("6").innerHTML = "";
    document.getElementById("7").innerHTML = "";
    document.getElementById("8").innerHTML = "";
    document.getElementById("9").innerHTML = "";
    document.getElementById("1").disabled = false;
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
    document.getElementById("play-again").style.opacity = 0;
    document.getElementById("winner").innerHTML = "Tic Tac Toe";
    move = true;
}

function isGameOver() {
    if ((document.getElementById("1").innerHTML === "X"
    & document.getElementById("2").innerHTML === "X"
    & document.getElementById("3").innerHTML === "X")
    | (document.getElementById("4").innerHTML === "X"
    & document.getElementById("5").innerHTML === "X"
    & document.getElementById("6").innerHTML === "X")
    | (document.getElementById("7").innerHTML === "X"
    & document.getElementById("8").innerHTML === "X"
    & document.getElementById("9").innerHTML === "X")
    |(document.getElementById("1").innerHTML === "X"
    & document.getElementById("5").innerHTML === "X"
    & document.getElementById("9").innerHTML === "X")
    |(document.getElementById("3").innerHTML === "X"
    & document.getElementById("5").innerHTML === "X"
    & document.getElementById("7").innerHTML === "X")
    |(document.getElementById("1").innerHTML === "X"
    & document.getElementById("4").innerHTML === "X"
    & document.getElementById("7").innerHTML === "X")
    |(document.getElementById("2").innerHTML === "X"
    & document.getElementById("5").innerHTML === "X"
    & document.getElementById("8").innerHTML === "X")
    | (document.getElementById("3").innerHTML === "X"
    & document.getElementById("6").innerHTML === "X"
    & document.getElementById("9").innerHTML === "X")) {
        document.getElementById("winner").innerHTML = "Winner: X!";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById("play-again").style.opacity = 1;
    } else if 
        ((document.getElementById("1").innerHTML === "O"
    & document.getElementById("2").innerHTML === "O"
    & document.getElementById("3").innerHTML === "O")
    | (document.getElementById("4").innerHTML === "O"
    & document.getElementById("5").innerHTML === "O"
    & document.getElementById("6").innerHTML === "O")
    | (document.getElementById("7").innerHTML === "O"
    & document.getElementById("8").innerHTML === "O"
    & document.getElementById("9").innerHTML === "O")
    |(document.getElementById("1").innerHTML === "O"
    & document.getElementById("5").innerHTML === "O"
    & document.getElementById("9").innerHTML === "O")
    |(document.getElementById("3").innerHTML === "O"
    & document.getElementById("5").innerHTML === "O"
    & document.getElementById("7").innerHTML === "O")
    |(document.getElementById("1").innerHTML === "O"
    & document.getElementById("4").innerHTML === "O"
    & document.getElementById("7").innerHTML === "O")
    |(document.getElementById("2").innerHTML === "O"
    & document.getElementById("5").innerHTML === "O"
    & document.getElementById("8").innerHTML === "O")
    | (document.getElementById("3").innerHTML === "O"
    & document.getElementById("6").innerHTML === "O"
    & document.getElementById("9").innerHTML === "O")) {
        document.getElementById("winner").innerHTML = "Winner: O!";
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById("play-again").style.opacity = 1;
    } else if (document.getElementById("1").innerHTML != ''
    & document.getElementById("2").innerHTML != ''
    & document.getElementById("3").innerHTML != ''
    & document.getElementById("4").innerHTML != ''
    & document.getElementById("5").innerHTML != ''
    & document.getElementById("6").innerHTML != ''
    & document.getElementById("7").innerHTML != ''
    & document.getElementById("8").innerHTML != ''
    & document.getElementById("9").innerHTML != '') {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
        document.getElementById("play-again").style.opacity = 1;
        document.getElementById("winner").innerHTML = "Tie!";
    }
}
