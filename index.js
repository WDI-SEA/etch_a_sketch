// let pixel = document.getElementsByClassName('pixel')

// // pixel[0].addEventListener("mouseenter", () => {
// //     pixel[0].className = "colored-in"
// // })
// for (let i = 0; i < 10; i++) {
//     let pixel = document.createElement('div')
//     pixel.classList.add('pixel')
//     document.querySelector('#screen').appendChild(pixel)
//     pixel.addEventListener("mouseenter", () => {
//         document.getElementsByClassName('pixel')[i].className = "colored-in"
//     })
// }

const etch = () => {
    const pix = document.querySelector('.pixel')
    pix.addEventListener('mouseenter', () => {
        pix.classList.add('colored-in')
    })
}

//const getContainer - document.getElementById('screen)
let numOfPixels = 10000

const generatePixel = () => {
    for (let i=0; i<numOfPixels; i++) {
        //create a new div element
        let singleDiv = document.createElement('div')
        singleDiv.classList.add('pixel')
        //append the new div to the container div
        document.getElementById('screen').appendChild(singleDiv)
        singleDiv.addEventListener('mouseenter', () => {
            singleDiv.classList.add('colored-in')
        })
        clearScreen.addEventListener('click', () => {
            if(singleDiv.classList.contains('colored-in')) {
                singleDiv.classList.remove('colored-in')
            }
        })
    }
}

// const clearScreen() => {
//     //remove 'colored-in' class from ALL pixels
//     const pixels = document.querySelectorAll('.pixel')
//     for(let i=0; i<pixels.length; i++) {
//         pixels[i].classList.remove('colored-in')
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    generatePixel()
})
