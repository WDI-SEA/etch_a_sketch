const screen = document.querySelector("#screen")
const pixel = document.querySelector(".pixel")
const clearBtn = document.querySelector("#clear-screen-button")

const mouseEnter = () => {
    pixel.addEventListener("mouseenter", () => {pixel.classList.add("colored-in")})}

const fillPixels = () => {
    for(let i=0; i <10000; i++) {
        const morePixels = document.createElement("div")
        morePixels.classList.add("pixel")
        screen.append(morePixels)
    }
}
mouseEnter();
fillPixels();

const mouseEnterAll = () => {
    const allPixel = document.querySelectorAll(".pixel")
    for(let i=0; i<allPixel.length; i++) {
         allPixel[i].addEventListener("mouseenter", (e) => {
            e.target.classList.add("colored-in")
        })
    }
}
mouseEnterAll();


const clearAll = () => {
    const allPixel = document.querySelectorAll(".pixel")
    clearBtn.addEventListener("click", () => {
        allPixel.forEach(pixel => {
            pixel.classList.remove("colored-in")})
    })
}


clearAll();


