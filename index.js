
const clear = document.querySelector('#clear-screen-button')
document.addEventListener('DOMContentLoaded', () => {
    for( let i=0; i<4000; i++){
        const pixel = document.createElement('div')
        pixel.classList.add('pixel')
        document.querySelector('#screen').appendChild(pixel)
        pixel.addEventListener('mouseenter', () => {
        pixel.classList.add('colored-in')
        
        })

}
clear.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    for(let i = 0; i < pixels.length; i++){
    
    pixels[i].classList.remove('colored-in')
    }
})     
    
})
   