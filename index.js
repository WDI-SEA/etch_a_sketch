// grab the elements
const container = document.querySelector('.container')
const screen = document.querySelector('#screen')
const pixel = document.querySelector('.pixel')
const clearBtn = document.querySelector('#clear-screen-button')

// put listener on the pixel 

pixel.addEventListener('mouseenter', () => {
    // makes pixel black when hovered on
    pixel.classList.add('colored-in')
})
// loop through and make new pixels
for (let i = 0; i < 4500; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')

    //add mouseenter functionality
    newPixel.addEventListener('mouseenter', (e) => {
        e.target.classList.add('colored-in')
    })
    //append pixels to screen
    screen.append(newPixel)
}

//make clear btn work

let clearFunction = function() {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel => {
        pixel.classList.remove ('colored-in')
    })
}

clearBtn.addEventListener('click', clearFunction)













// // grab html elements
// const container = document.querySelector('.container')
// const screen = document.querySelector('#screen')
// const pixel = document.querySelector('.pixel')
// const clearBtn = document.querySelector('#clear-screen-button')

// // wait for DOM to load 
// document.addEventListener('DOMContentLoaded', () => {
//     makePixels()
// })


// // make the top left pixel a black background when hovered on 
// const addColor = (event) => {
//     // console.log('it worked!')
//     // pixel.classList.add ('colored-in')
//     console.log(event)
//     event.target.classList.add ('colored-in')
// }

// //make pixels across the screen

// const makePixels = () => {
//     for( let i =0; i < 4000; i++){
//         const pixels = document.createElement('div')
//         pixels.classList.add('pixel')
//         screen.appendChild(pixels)
//         pixels.addEventListener('mouseenter', addColor)
//     }
// }

// clearBtn.addEventListener('click', () => {
//     // variable to select all of the pixels
//     const selector = document.querySelectorAll('.pixel')
//     selector.forEach (pixel =>{
//         pixel.classList.remove ('colored-in')
//     })
// })














// // // make the pixels across the screen 
// // //function expression
// // const makePixels = () => {
// //     for(let i = 0; i < 4000; i++){
// //         const pixels = document.createElement('div')
// //         pixels.classList.add('pixel')
// //         screen.appendChild(pixels)
// //         // make the pixel recognize when its hovered over
// //         pixels.addEventListener('mouseenter', addColor)
// //     }
// // }




// // // adds color to the pixel when hovered over
// // const addColor = (event) => {
// //     // console.log('it worked!')
// //     // console.log(event.target)
// //     //event is the event object event.target is the speciic target that triggered the event
// //     event.target.classList.add ('colored-in')
// // }











// // clearBtn.addEventListener('click', () => {
// //     const allPixels = document.querySelectorAll('.pixel')
// //     // console.log('it clearBtn')
    
// //     allPixels.forEach (pixel => {
// //         pixel.classList.remove ('colored-in')
// //     })
// // })

// //grab pixel with an eventl listener//




