

document.addEventListener('DOMContentLoaded', () => {



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
        }
    }

    // made a functioning and logical clearButton, i know how this one works. 

    const clearButton = document.getElementById('clear-screen-button')
    clearButton.addEventListener('click', () => {
        const blackPixels = document.querySelectorAll('.pixel')
        blackPixels.forEach(div => {
            div.classList.remove('colored-in')
            
        })
    })
    
    setGrid(screenGetSize())
})
