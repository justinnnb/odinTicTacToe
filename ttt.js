
const gameboard = (function() {
    const createTile = (element) => {
        for (let i = 0; i < 9; i++) {
            let board = document.querySelector(".container-board");
            let tile = document.createElement("div");
            board.appendChild(tile);
            tile.className = "tile";        
        }
    };

    return {
        createTile,
    }
})();

gameboard.createTile();