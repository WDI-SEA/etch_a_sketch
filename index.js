// The magic happens here!

let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

// buttom
let clearButton = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', () => {
    pixel.classList.add('colored-in')
})

for (let i = 0; i < 3134; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    // add mouseEnter function
    newPixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })

    screen.append(newPixel)
}

// Function to clear sccreen 

let clearFunction = function () {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
}

clearButton.addEventListener('click', clearFunction)