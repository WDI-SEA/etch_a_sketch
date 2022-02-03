const pixel = document.querySelector(".pixel")
// const makeGrids = document.querySelector('#screen')



// make grids
const makeGrids = () => {
    // use for loop so that code replicates for every new div/grid we made
    for (let i = 0; i < 5059; i++) {
        // create new div
        const grid = document.createElement("div")
        // add pixels to new div
        grid.classList.add("pixel")
        // make the grid change color when mouseenter
        grid.addEventListener("mouseenter", () => {
            // make it black when mouseenter
            grid.classList.add("colored-in")
        })
        // append 
        document.querySelector("#screen").appendChild(grid)
    }
}


// // make the 1 pixel work
// // goal: make the pixel turn black when the mouse hovers over it
// // tool to use: addEventListener, .classList.add, mouseenter
// // tip: check out .colored-in class in the style.css
// changing a single pixel
// const singlePixel = document.querySelector('.pixel')
// // console.log(singlePixel)

// singlePixel.addEventListener("mouseenter", function () {
//     singlePixel.classList.add("colored-in")
// })


// clear the screen
// use querySelectorAll
// use .classList.remove
const clearScreen = () => {
    const filledPixels = document.querySelectorAll(".colored-in")
    for (let i = 0; i < filledPixels.length; i++) {
        filledPixels[i].classList.remove("colored-in")
    }
}
document.querySelector("#clear-screen-button").addEventListener('click', clearScreen)







// // need this bc <script> is located in the head instead of body
document.addEventListener ('DOMContentLoaded', () => {
    makeGrids ()
})