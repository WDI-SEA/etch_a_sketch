// The magic happens here!
const clearBtn = document.querySelector("#clear-screen-button")
const screen = document.querySelector("#screen")

document.addEventListener("DOMContentLoaded", function(){
    console.log("hiii")
    const firstpixel = document.querySelector(".pixel")
    firstpixel.addEventListener("mouseenter",boxFill)

    for(i=0; i<8099;i++){
        const box = document.createElement("div")
        box.classList.add("pixel")
        box.addEventListener("mouseenter",boxFill)
        screen.append(box)
    }
    clearBtn.addEventListener("click",clearAll)
})

function boxFill(event) {
    event.target.classList.add("colored-in")
}

function clearAll() {
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach(function(j){
        j.classList.remove("colored-in")
    })


}