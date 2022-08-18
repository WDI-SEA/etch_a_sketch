// The magic happens here!
addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector('#screen')
    const button = document.querySelector('#clear-screen-button')



    for (let i = 0; i < 3000; i++) {
        const pixelDiv = document.createElement('div')
        pixelDiv.classList.add('pixel')
        screen.append(pixelDiv)
    }
        const pixels = document.querySelectorAll(".pixel")
        pixels.forEach(pixel => {
        pixel.addEventListener("mouseenter", () => {
        pixel.style.backgroundColor = "black"
    })
})
        button.addEventListener("click", () => {
        pixels.forEach(pixel => {
        pixel.style.backgroundColor = "white"
    })
})
})

