// The magic happens here!

document.querySelector(".pixel").addEventListener("mouseenter", () => {
     document.querySelector(".pixel").classList.add("colored-in")
    })

// for (i =0; i < 500; i++)

const makePixel = () => {

    for (i = 0; i < 5000; i++) {
        const div = document.createElement("div")
        div.classList.add("pixel")
        document.getElementById("screen").appendChild(div)
    } }

// const sketchPad = () => {
//     const pixel = document.querySelectorAll(".pixel")
//     if (document.classList == "pixel") {
//         pixel.addEventListener("mouseenter", () => {
//         document.querySelector(".pixel").classList.add("colored-in")
//         })
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    makePixel()

    // let pix = document.querySelectorAll(".pixels")
    // pix.forEach(() => {
    //     pix.addEventListener("mouseenter", () => {
    //         document.querySelector(".pixel").classList.add("colored-in")
    //     })
   
    // const pix = document.querySelector(".pixel")
    // const changeColor = () => {
    //     pix.classList.add("colored-in")
    // }

    // pix.addEventListener("mouseenter", changeColor())

    const sketch = () => {
        document.querySelector(".pixel").classList.add("colored-in")
    }
    const pix = document.querySelectorAll("pixel")
    pix.addEventListener("mouseenter", sketch(pix))

})