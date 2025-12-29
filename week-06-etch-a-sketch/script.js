let squaresPerSide = 16;
const container = document.querySelector(".container");

function generateFreshBoard() {
  container.innerHTML = "";

  const squareSize = 960 / squaresPerSide;

  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const newSquare = document.createElement("div");
    newSquare.style.width = `${squareSize}px`;
    newSquare.style.height = `${squareSize}px`;
    newSquare.style.backgroundColor = "blue";

    newSquare.addEventListener("mouseover", function addOpacity() {
      newSquare.style.opacity = 0.8;
    });

    container.appendChild(newSquare);
  }
}

function changeSquaresAndResetBoard() {
  const newNumSquaresString = prompt(
    "enter the new number of squares per side"
  );
  const newNumSquares = Number(newNumSquaresString);

  if (!isNaN(newNumSquares) && newNumSquares > 0 && newNumSquares <= 100) {
    squaresPerSide = newNumSquares;
    generateFreshBoard();
  }
}

generateFreshBoard();

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", generateFreshBoard);

const changeSquaresBtn = document.querySelector("#change-squares-btn");
changeSquaresBtn.addEventListener("click", changeSquaresAndResetBoard);
