// The magic happens here!
document.addEventListener('DOMContentLoaded', () => {
    let screen = document.querySelector('#screen')
    let pixels ;
    let clear = document.querySelector("#clear-screen-button")
    console.log(clear)

    for (i = 0; i < 13000; i++) {
        //create element
        const newPixel = document.createElement('div')
        // give element properties
        newPixel.classList.add('pixel')
        // newPixel.addEventListener('mouseenter', () => {
        //     newPixel.classList.add('colored-in');    
        // })
        //assign to DOM tree
        screen.append(newPixel)
    }
    pixels = document.querySelectorAll(".pixel")

    // function color (e) {
    //     e.target.classList.add('colored-in')
    //         console.log(pixel.className)
    //     }
    
    // pixel.addEventListener('mouseenter', color);

    pixels.forEach(taco => {
        taco.addEventListener('mouseenter', () => {
            taco.classList.add('colored-in')
            
        })
    })

    clear.addEventListener('click', () => {
        pixels.forEach(pixel => {
            pixel.classList.remove('colored-in')
        })

        
        
        // let pixels = document.querySelectorAll(".colored-in")
        // pixels.classList.remove('colored-in')

    })


})