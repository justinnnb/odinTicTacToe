
const Game = (() => {
    // Create 3 x 3 tiles, new Game
    const createTile = (element) => {
        let board = document.querySelector(".container-board");
        board.innerHTML = "";
        for (let i = 0; i < 9; i++) {
            let tile = document.createElement("div");
            board.appendChild(tile);
            tile.className = "tile";        
        }
    };

    // Select players

    const selectPlayer = () => {
        
    }
    // Check Winner

    const checkWin = () => {
        const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < winConditions.length; i++) {
            const tile = document.querySelectorAll(".tile");
            const [a, b, c] = winConditions[i];
            if (
            tile[a].textContent !== "" &&
            tile[a].textContent === tile[b].textContent &&
            tile[a].textContent === tile[c].textContent
            ) {
            console.log("win");
            createTile();
            }
        }
    }

    // Create X and O on tiles alternately
    
    const markTiles = () => {
        document.body.addEventListener("click", function (event){
        if (event.target.className == "tile" && event.target.textContent == "")  {
            let xCount = document.querySelectorAll("#X").length + document.querySelectorAll("#O").length
            if (xCount % 2 != 0 && event.target.className == "tile") {
                    event.target.textContent = "X"
                    event.target.id = "X"
                    checkWin()
            } else {
                    event.target.textContent = "O"
                    event.target.id = "O";
                    checkWin()
            }
        }
    })}

    return {
        createTile, checkWin, markTiles
    }

})();

// Game.selectPlayer();
Game.createTile();
Game.markTiles();
