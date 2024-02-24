let cointainer = document.getElementById("containar");
let boxes = document.querySelectorAll(".box");
let Winner = document.getElementById("winner");
Winner.style.display = "none";
let newGame = document.querySelector("#newGame");
newGame.style.display = "none";
let REsetGame = document.querySelector("#resetGame");

let playerO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
let ResetGame = () => {
    moves = 0;
    newGame.style.marginBottom = "1vh";
    cointainer.style.height = "100vh";
    playerO = true;
    Winner.style.display = "none";
    newGame.style.display = "none";
    enableBoxes();
}
let enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
let moves = 0;
boxes.forEach((element) => {
    element.addEventListener("click", () => {
        if (playerO === true) {
            element.style.color = "red";
            element.innerText = "O";
            playerO = false;
        } else {
            element.style.color = "blue";
            element.innerText = "X"
            playerO = true;
        };
        element.disabled = true;
        moves++;
        if (moves === 9) {
            Winner.style.display = "block";
            newGame.style.display = "block";
            Winner.innerText = "It's a draw! 😕";
            newGame.style.marginBottom = "70vh";
            cointainer.style.height = "230vh";
        }
        checkWinner();
    });
});

let checkWinner = () => {
    for (let patterns of winPatterns) {
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                Winner.style.display = "block";
                newGame.style.display = "block";
                Winner.innerText = `Congratulations , winner is 😎👉 ${pos1Val}`;
                newGame.style.marginBottom = "70vh";
                cointainer.style.height = "230vh";
                for (box of boxes) {
                    box.disabled = true;
                }
            }
        }
    }
};
newGame.addEventListener("click", ResetGame);
REsetGame.addEventListener("click", ResetGame);