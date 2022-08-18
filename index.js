
// to encorporate the pre existing div
document.addEventListener('DOMContentLoaded', () => {
    const mousePixel = document.querySelector('.pixel')
    mousePixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })


    const clearButton = document.querySelector('#clear-screen-button')
    clearButton.addEventListener('click', () => {
        mousePixel.classList.remove('colored-in')
    })

    // to estimate screen size based on user -- works for 23 inch screen
    // with moderate view.
    const screenGetSize = () => {
        let screenW = screen.width 
        let screenH = screen.height 
        let screenSize = (screenH * screenW) * .0033
        return screenSize

    }

    // takes in screensize and populates screen 
    // gives each dive the class of pixel and the event listner
    // for mouse enter.
    // also adds remove functionality.

    const setGrid = (screenSize) => {
        for (let i = 0; i < screenSize; i++) {
            const div = document.createElement('div')
            div.classList.add('pixel')
            const screen = document.querySelector('#screen')
            screen.appendChild(div)
            div.addEventListener('mouseenter', (e) => {
                e.target.classList.add('colored-in')
            })
            clearButton.addEventListener('click', () => {
                div.classList.remove('colored-in')
            })
        }
       
    }
    
    setGrid(screenGetSize())
})