// The magic happens here!
document.addEventListener('DOMContentLoaded', () => {
    let screen = document.querySelector('#screen')
    let pixels = document.querySelectorAll(".pixel")
    let clear = document.querySelector("#clear-screen-button")
    console.log(pixel)
    console.log(clear)

    for (i = 0; i < 5000; i++) {
        //create element
        const newPixel = document.createElement('div')
        // give element properties
        newPixel.classList.add('pixel')
        newPixel.addEventListener('mouseenter', () => {
            newPixel.classList.add('colored-in');    
        })
        //assign to DOM tree
        screen.append(newPixel)
    }

    // function color (e) {
    //     e.target.classList.add('colored-in')
    //         console.log(pixel.className)
    //     }
    
    // pixel.addEventListener('mouseenter', color);


    pixel.addEventListener('mouseenter', () => {
        pixel.classList.add('colored-in')
        console.log(pixel.className)
    })

    clear.addEventListener('click', () => {
        let pixels = document.querySelectorAll(".colored-in")
        pixels.classList.remove('colored-in')

    })


})