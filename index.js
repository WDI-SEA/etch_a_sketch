let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')
let allPixels = document.getElementsByClassName('.pixel')
let clearButton = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', (e) => {
    pixel.classList.add('colored-in')
})

for (let i = 0; i < 7433; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    newPixel.addEventListener('mouseenter', function(e){
        e.target.classList.add('colored-in')
    })
screen.append(newPixel)
}       

clearButton.addEventListener("click", (e) => {

    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
})