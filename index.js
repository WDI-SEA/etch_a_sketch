const etchScreen = document.querySelector("#screen")
const pixel = document.querySelector(".pixel")
const clearButton = document.querySelector("#clear-screen-button")


document.addEventListener("DOMContentLoaded",()=>{
    populateBoard()

})

const populateBoard = () =>{
    for(let i = 0; i < 5000; i++){
        //create new div
        const newPixel = document.createElement("div")
        //add pixel to new div's class
        newPixel.classList.add("pixel")
        //add event listener for hover to change color to the new pixel
        newPixel.addEventListener('mouseenter',()=>{
            newPixel.classList.add("colored-in")
        })
        //add new pixel to screen element 
        etchScreen.appendChild(newPixel)
    }
}

const clearBoard = () =>{
    const coloredPixels = document.querySelectorAll(".colored-in")
    console.log(coloredPixels)
    for(let i = 0; i < coloredPixels.length; i++){
        coloredPixels[i].classList.remove("colored-in")
    }
    
}

clearButton.addEventListener('click',clearBoard)