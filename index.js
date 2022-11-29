// The magic happens here!

let screen = document.querySelector("#screen");
let pixel = document.querySelector(".pixel");
let clearButton = document.querySelector("#clear-screen-button");

//color in pixels when "mouseenter" event happens 
pixel.addEventListener("mouseenter", () => {
    pixel.classList.add("colored-in");
})

//create more pixels to fill screen area
for(let i=0; i<4000; i++) {
    let newPixel = document.createElement("div");
    newPixel.classList.add("pixel");
    //After creating them, add them to the screen
    screen.append(newPixel);
    //add mouseenter function to color the new pixels
    newPixel.addEventListener("mouseenter", (e) => {
        e.target.classList.add("colored-in");

    })
}

//function for "clear screen" button
clearButton.addEventListener("click", () => {
    let allPixels = document.querySelectorAll(".pixel");
    allPixels.forEach(pixel => {
        //instead of turning them white, remove the class
        pixel.classList.remove("colored-in"); 
    })
})
