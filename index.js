// The magic happens here!
// console.log('hello')
// const pixel = document.querySelector('.pixel')
// const screen = document.querySelector('#screen')
// const newPix = document.createElement('div')


const changePixel = (e) => {
    e.target.classList.add('colored-in')
}
//7605  22487
const fillPage = () => {
    for (let i = 0; i < 45280; i++) {
        const screen = document.querySelector('#screen')
        const newPix = document.createElement('div')
        newPix.classList.add('pixel')
        newPix.addEventListener('mouseenter', changePixel)
        screen.appendChild(newPix)
    }
}

const clearScrn = () => {
    document.querySelectorAll('.pixel').forEach((el)=>el.classList.remove('colored-in'))
}

document.addEventListener('DOMContentLoaded', () => {
    fillPage()
    document.getElementById('clear-screen-button').addEventListener('click', clearScrn)
})
