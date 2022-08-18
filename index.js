

document.addEventListener('DOMContentLoaded', () => {



    // to estimate screen size based on user -- works for 23 inch screen
    // with moderate view.
    // sw * sh * .8 should account for the area (8% margin) had to fiddle with the actual coefficient
    const screenGetSize = () => {
        let screenW = screen.width 
        let screenH = screen.height 
        let screenSize = (screenH * screenW) * .0033
        return screenSize

    }

    // takes in screen size and populates screen 
    // gives each dive the class of pixel and the event listener
    // for 'mouseenter'.
    

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
