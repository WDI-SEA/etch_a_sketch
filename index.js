// The magic happens here!
const pixel1 = document.querySelector(".pixel")


// pixel1.addEventListener("mouseenter", () => {
//     pixel1.style.backgroundColor = "black"
// })

const clearBtn = document.getElementById("clear-screen-button")

const boardGenerator = (numOfPixels) => {
    for ( let x = 1; x < numOfPixels; x++){
        const pixels = document.createElement("div")
        pixels.classList.add("pixel")
        document.getElementById("screen").appendChild(pixels)
        pixels.addEventListener("mouseenter", () => {
            pixels.classList.add("colored-in")
        })
        pixel1.addEventListener("mouseenter", ()=> {
            pixel1.classList.add("colored-in")
        })
        // clearBtn.addEventListener("click", () => {
        //         // const pixels = document.querySelectorAll(".pixel")
        //     pixels.classList.remove("colored-in");
        //     pixel1.classList.remove("colored-in")
        // })
    }
}

const clear = () => {
    clearBtn.addEventListener("click", () => {
        const pixels = document.querySelectorAll(".colored-in")
        pixels.forEach((pixel) => {
            pixel.classList.remove("colored-in")
        })
        // pixels.classList.remove("colored-in")
    })
}



document.addEventListener("DOMContentLoaded", () => {
    clear()
    boardGenerator(7850)
})