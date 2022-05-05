const clearButton = document.getElementById('clear-screen-button')
const screen = document.getElementById('screen')

document.addEventListener('DOMContentLoaded', function(){
    // console.log('oh hi there, i work')
    const firstPixel = document.querySelector('.pixel')
    firstPixel.addEventListener('mouseenter', boxFill)

    for (i=0; i<8500; i++){
        const screenBox = document.createElement('div')
        screenBox.classList.add('pixel')
        screenBox.addEventListener('mouseenter', boxFill)
        screen.append(screenBox)
    }
    clearButton.addEventListener('click', clearAll)
})

function boxFill(event) {
    event.target.classList.add('colored-in')
}

function clearAll() {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(function(e){
        e.classList.remove('colored-in')
    })
}