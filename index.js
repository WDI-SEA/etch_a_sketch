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

// // code from code along

//     let screen = document.querySelector('#screen')
//     let pixel = document.querySelector('.pixel');
//     let allPixels = document.getElementsByClassName('.pixel')
//     let clearButton = document.querySelector("#clear-screen-button")
    

//     pixel.addEventListener('mouseenter', function(e) {
//         pixel.classList.add('colored-in')
//     })

//     for (let i = 0; i < 21631; i++) {
//         let newPixel = document.createElement('div')
//         newPixel.classList.add('pixel')
//         newPixel.addEventListener('mouseenter', function(e) {
//             e.target.classList.add('colored-in')
//         })
//         screen.append(newPixel)
//     }

//     clearButton.addEventListener('click', (e) => {
//         // way #2 is doing it here with QuerySelector after they have all been added
//         let everyPixel = document.querySelectorAll('.pixel')
//         // querySelectorAll creates a "node list" (not an Array)
//         // this didn't work well.....
//         // for (let i = 0; everyPixel.length; i++) {
//         //     everyPixel[i].classList.remove('colored-in')
//         // }
//         everyPixel.forEach(pixel => {
//             pixel.classList.remove('colored-in')
//         })
//     })

    //query selectro returns a node list. node lists are static collections. they don't change based on your code. all the pixels i added wouldn't show up yet. this is a static collection of the html objects that have the class pixel. if we change it to getElementsByClassName (from querySelector) will give you the full list. this is