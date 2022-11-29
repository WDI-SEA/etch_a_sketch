const pixel = document.querySelector('.pixel')

const screen = document.querySelector('#screen')
const button = document.querySelector('#clear-screen-button')

const colorPixel = (event) => {
    event.target.classList.add('colored-in')
}

function createPixels() {
    for(i=0; i < 5723; i++){
        const newPixel = document.createElement('div');
        newPixel.classList.add('pixel')
        screen.append(newPixel)
        newPixel.addEventListener('mouseenter', colorPixel)
    }
}

const clearScreen = () => {
   const allColoredPixels = document.querySelectorAll('.colored-in')
   allColoredPixels.forEach(item => {
        item.remove('.colored-in')
    })

}

document.addEventListener('DOMContentLoaded', ()=>{ 
    createPixels()
    button.addEventListener('mousedown', clearScreen)
 })






