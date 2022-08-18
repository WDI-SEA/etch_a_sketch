let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')
let allPixels = document.getElementsByClassName('.pixel')
let clearButton = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', (e) => {
    pixel.classList.add('colored-in')
})

for (let i = 0; i < 5719; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    newPixel.addEventListener('mouseenter', function(e){
        e.target.classList.add('colored-in')
    })
screen.append(newPixel)
}       

clearButton.addEventListener("click", (e) => {
    let everyPixel = document.querySelectorAll('pixel')
    for (let i = 0; everyPixel.length; i++) {
        everyPixel[i].classList.remove('colored-in')
    }
})