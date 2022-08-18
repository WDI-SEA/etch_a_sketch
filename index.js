// The magic happens here!
const screen = document.querySelector('#screen')
const pixel = document.querySelector('.pixel')

const makePixel = () => {
        for (let i = 0; i < 4025; i++) {
          const pix = document.createElement('div')
            pix.classList.add('pixel')
            pix.addEventListener("mouseover", function() {
                    pix.classList.add("colored-in")
                }) 
            screen.appendChild(pix)
    
        }
    
}



document.addEventListener('DOMContentLoaded', () => {
     makePixel()
    
})
    

    
