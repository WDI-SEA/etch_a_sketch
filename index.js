// The magic happens here!
const pixel = document.querySelector('.pixel')
const screen = document.querySelector('#screen')
const clearScreen = document.querySelector('#clear-screen-button')

//fuction to fill in each pixel
const pixelFill = (event) => {
    event.target.classList.add('colored-in')
 }
document.addEventListener('DOMContentLoaded', () => {
    for(i = 0; i < 6025; i++){
        //create blank pixels
        const emptyPixels = document.createElement('div')
        //add pixel class
        emptyPixels.classList.add('pixel')
        //append the empty pixels to the screen
        screen.appendChild(emptyPixels)
        //fill the pixels when moused over
        emptyPixels.addEventListener('mouseenter`', pixelFill )
    }
    //make the clear button work
     clearScreen.addEventListener('click', () => {
         //grab all the pixels
         const pixels = document.querySelectorAll('.pixel')
         //go through and remove colored-in class for each pixel
         pixels.forEach(function(j){
            j.classList.remove('colored-in')
         })
     })   
   })