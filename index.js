// The magic happens here!
document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector("#screen")
    const clearButton = document.querySelector("#clear-screen-button")
    
    let mouseHover = (e) => {
        e.target.classList.add("colored-in")
    }  

    const etchBoard = () => {
        for (i = 0; i < 8000; i++) {
            const board = document.createElement("div")
            board.classList.add("pixel")
            board.addEventListener("mouseover", mouseHover)
            screen.append(board)
           }
    }
    etchBoard()

    clearButton.addEventListener("click", () => {
        while(screen.firstChild) {
            screen.removeChild(screen.firstChild)
        }
        for (i = 0; i < 8000; i++) {
            const board = document.createElement("div")
            board.classList.add("pixel")
            board.addEventListener("mouseover", mouseHover)
            screen.append(board)
    }
})
})




    

   
    




