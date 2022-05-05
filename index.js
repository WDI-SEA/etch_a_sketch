// The magic happens here!

document.addEventListener('DOMContentLoaded' ,() => {
    for (let i=0; i<6300; i++) {    
        const screen = document.querySelector('#screen')
        const nextPixel = document.createElement('div')
        nextPixel.classList.add('pixel')
        screen.appendChild(nextPixel)
        nextPixel.addEventListener('mouseover' ,event => {
            console.log('mousover!')
            console.log(event.target)
            event.target.classList.add('colored-in')
        })
    }
    
    console.log('hey forkface')
    // grab the pixel element
    const pixel = document.querySelector('.pixel')
    pixel.addEventListener('mouseover' ,event => {
        console.log('mousover!')
        
        event.target.classList.add('colored-in')
    })
    
    document.querySelector('#clear-screen-button').addEventListener('click' ,() => {
        
        const colored = document.querySelectorAll('.colored-in')
        for (let i=0; i<colored.length; i++){
            coloredPixel = colored[i]
            coloredPixel.classList.remove('colored-in')
        }
    })
})