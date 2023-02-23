
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
    
    }
}
