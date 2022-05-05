// The magic happens here!
const generate = () => {
    for (let i = 0; i < 5156; i++){
        const square = document.createElement('div')
        square.classList.add('pixel')
        square.addEventListener('mouseenter', cnge)
        document.querySelector('#screen').append(square)

    }
}

 const cnge = (event) => {
    event.target.classList.add('colored-in')
}





const clear = () => {
    document.querySelector('.pixel').classList.remove('colored-in')
}

document.addEventListener('DOMContentLoaded', () => {
    generate()

    target = document.querySelector('.pixel')
    target.addEventListener('mouseenter', e => {
    // console.log('y')
    target.classList.add("colored-in")
    })

    // document.querySelector('#clear-screen-button').addEventListener('click', () => {
    //     clear()

    // })
    document.querySelector('#clear-screen-button').addEventListener('click', () => {
        const pixels = Array.from(document.querySelectorAll('.pixel'))
        pixels.forEach(pixel => pixel.classList.remove('colored-in'))
    })

})
// const pixelCount = 6399

// document.addEventListener('DOMContentloaded', () => {
//     // const pixel = document.querySelector('.pixel')
//     // pixel.addEventListener('mouseenter', () => {
//     //     pixel.classList.add('colored-in')
//     // })
//     const screen = document.querySelector('#screen')
//     for (let i = 0; i < pixelCount; i++) {
//         const pixel = document.createElement('div')
//         //easy
//         // pixel.classList.add('pixel')
//         // pixel.addEventListener('mousenter', () => {
//         //     pixel.classList.add('colored-in')
//         // })
//         screen.appendChild(pixel)
//     }
//     //query selectorAll
//     const allpixels = document.querySelectorAll('pixel')
//     const pixelArray = Array.from(allpixels)
//     pixelArray.forEach(pixel => {
//         pixel.addEventListener('mouseenter', () => {
//             pixel.classList.add('colored-in')
//         })
//     })
//     document.querySelectorAll('#clear-screen-button').addEventListener('click', () => {
//         const pixels = Array.from(document.querySelectorAll('.pixel'))
//         pixels.forEach(pixel => pixel.classList.remove('colored-in'))
//     })
// })
