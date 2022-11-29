let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

let clearButton = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})

for  (let i = 0; i < 4000; i++)   {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    screen.append(newPixel)

    newPixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })

    screen.append(newPixel)
}

let clearPixel = function () {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
}

clearButton.addEventListener('click', clearFunction)
