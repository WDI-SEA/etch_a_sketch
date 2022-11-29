// The magic happens here!

// make it onhover make background color different, then clone a ton of them with the class pixel

const clear = document.querySelector('#clear-screen-button')
const screen = document.querySelector('#screen')

const etchedSketched = () => {
    for (let i = 0; i < 8976; i++){
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        screen.appendChild(pixel)
        pixel.addEventListener('mouseenter', () => {
            pixel.style.backgroundColor = 'grey'
        })
        clear.addEventListener('click', () => {
            pixel.style.backgroundColor = 'white'
        })
    }
}



// const pixel = document.querySelector('.pixel')
// pixel.addEventListener('mouseenter', (e) => {
//     pixel.style.backgroundColor = 'gray'
// })

document.addEventListener('DOMContentLoaded', () => {
    etchedSketched()
})