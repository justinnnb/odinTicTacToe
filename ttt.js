
const Game = (() => {
    const createTile = (element) => {
        for (let i = 0; i < 9; i++) {
            let board = document.querySelector(".container-board");
            let tile = document.createElement("div");
            board.appendChild(tile);
            tile.className = "tile";        
        }
    };
    
    document.body.addEventListener("click", function (event){
        if (event.target.className == "tile" && event.target.textContent == "")  {
            let xCount = document.querySelectorAll("#X").length + document.querySelectorAll("#O").length
            if (xCount == 0) {
                    event.target.textContent = "O"
                    event.target.id = "O";
            } else if (xCount % 2 != 0) {
                    event.target.textContent = "X"
                    event.target.id = "X"
            } else {
                    event.target.textContent = "O"
                    event.target.id = "O";
            }
}

    document.querySelectorAll(".tile")    

})
    return {
        createTile,
    }

})();

Game.createTile();
