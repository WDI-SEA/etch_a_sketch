//DOM Elements
const clearButton = document.querySelector('#clear-screen-button')
// const allPixel = document.querySelectorAll(".pixel")

const createPixel = () => {
    const screen = document.querySelector('#screen')
    for (let i = 0; i < 5081; i++) {
        //create a new div
        let smallPixel = document.createElement('div')
        smallPixel.classList.add("pixel")
        screen.appendChild(smallPixel)
        

        smallPixel.addEventListener('mouseenter', pixelColor)
    }
}

const pixelColor = (event) => {
    event.target.classList.add('colored-in')
}

const clearBtn = () => {
    const allPixel = document.querySelectorAll(".pixel")
    for (let i = 0; i < 5081; i++) {
        allPixel[i].classList.remove('colored-in')
    }
}



document.addEventListener("DOMContentLoaded", () => {
    createPixel()
    clearScreen = document.addEventListener('click', clearBtn)
})