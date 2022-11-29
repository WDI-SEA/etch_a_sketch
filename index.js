
//GLOBAL html elements
const container = document.querySelector('.container')
const screen = document.querySelector('#screen')
const pixel = document.querySelector('.pixel')
const clearBtn = document.querySelector('#clear-screen-button')

//DOM event listener
document.addEventListener('DOMContentLoaded', () => {
    addH1()
    createPixel()
})

const addH1 = () => {
    const h1 = document.createElement('h1')
    h1.innerText = 'Etch This Sketch'
    document.querySelector('body').prepend(h1) 
}

const createPixel = () => {
    for (let i = 0; i < 9383; i++) {
        const pixels = document.createElement('div')
        pixels.classList.add('pixel')
        screen.appendChild(pixels)
        pixels.addEventListener('mouseenter', changeColor)
    }
}

//add color to pixel when hovering over
const changeColor = (event) => {
//    pixel.classList.add('colored-in') 
   event.target.classList.add('colored-in')
}

clearBtn.addEventListener('click', () => {
    const selector = document.querySelectorAll('.pixel')
    selector.forEach(pixel => {
        pixel.classList.remove('colored-in')
    })
})



//------didn't work--------
// const mouseEnter = (e) => {
//     e.currentTarget.style.backgroundColor = 'black'
//     console.log('mouse enter')
// }
// const mouseLeave = (e) => {
//     e.currentTarget.style.backgroundColor = 'white'
//     console.log('mouse leave')
// }

// document.querySelector('.pixel').addEventListener('mouseenter', mouseEnter)
// document.querySelector('.pixel').addEventListener('mouseleave', mouseLeave)