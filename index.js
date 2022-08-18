// The magic happens here!
console.log('test')
document.addEventListener('DOMContentLoaded', () =>{

    const screen = document.querySelector('#screen')
    const container = document.querySelector('.container')
    const clear = document.querySelector('#clear-screen-button')
    
    const allPixels = 6000


    for (let i = 0; i < allPixels; i++) {
         // create new element
        // set the properties
        // append the new element to the DOM ( this will make it seen by user)
        
        let elem = document.createElement('div')
        elem.classList.add('pixel')
        screen.append(elem)
    }

    const pixels = document.querySelectorAll('.pixel')

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', (e)=>{
            e.target.style.backgroundColor = 'black'
    })
    })

    clear.addEventListener('click', (e) => {
        // clear out both list while loops
        pixels.forEach(pixel => {
        pixel.style.backgroundColor = 'white'
    })
    })
    
}) 
