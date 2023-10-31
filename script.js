document.getElementById("play-btn").addEventListener("click", startGame);

const clickedCells = [];

/* if (clickedNumber === generateBombs){
        currentCell.style.backgroundColor = 'red';
        result = " sei fuori dal gioco"
}else if()
*/


// Funzuone principale del gioco
function startGame() {

    const level = document.getElementById("level").value;
    console.log(level);



    let cellSize
    let gridSize;
    switch (level) {
        case "1":
            gridSize = 100;
            cellSize = 10;
            break;
        case "2":
            gridSize = 81;
            cellSize = 9;
            break;
        case "3":
            gridSize = 49;
            cellSize = 7;
            break;
        default:
            gridSize = 100;
            cellSize = 10;
            break;
    }
    console.log(gridSize);

    //generare le bombe
    const bombs = generateBombs(gridSize);
    console.log(bombs);

    const maxClicks = gridSize - bombs.length;
    console.log(maxClicks);


    //aggiungo al title classe hidden
    document.getElementById("title").classList.add("hidden");
    //rimuoviamo griglia nascosta
    const gridElem = document.getElementById("grid");
    gridElem.innerHTML = "";
    gridElem.classList.remove("hidden");

    for (let i = 1; i <= gridSize; i++) {
        const newCell = createGridCell(i, cellSize);
        newCell.addEventListener("click", handleCellClick);
        gridElem.append(newCell);
    }
}

function createGridCell(innerNumber, cellSize) {
    const cell = document.createElement("div");
    cell.classList.add("square");
    cell.style.width = `calc(100% / ${cellSize})`;
    cell.style.height = `calc(100% / ${cellSize})`;
    cell.innerHTML = `<span>${innerNumber}</span>`
    return cell;
}
//console.log(createGridCell(23));

function handleCellClick() {
    this.classList.add("clicked");
    const clickedNumber = this.textContent;
    console.log(clickedNumber);
}

// generiamo le bombe random math
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// generiamo le bombe
function generateBombs(max) {
    const result = [];
    while (result.length < 16) {
        const rndNum = getRndInteger(1, max);
        if (!result.includes(rndNum)) {
            result.push(rndNum);
        }
    }
    return result;
}

document.querySelector('clicked').addEventListener(click, function () {
    document.querySelector('square').style.backgroundColor = '#222';
})