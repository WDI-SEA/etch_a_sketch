// The magic happens here!
const screen = document.querySelector('#screen')
const makePixel = () => {

    for (let i = 0; i < 4001; i++) {
      const pix = document.createElement('div')
        pix.classList.add('pixel')
        screen.appendChild(pix)
    }
        
    let pixel = document.querySelector('.pixel')
    pixel.addEventListener("mouseenter", function () {
            pixel.classList.add("colored-in")
        }) 
    
}

document.addEventListener('DOMContentLoaded', () => {
     makePixel()
    
})
    

    
