// The magic happens here!
//declare variables
const clearBtn = document.querySelector("#clear-screen-button")
const screen = document.querySelector("#screen")

//Step1 making 1 pixel work
//* addEventListener, <anyDomElement>.classList.add
//* mouseenter event
//* .colored-in

document.addEventListener("DOMContentLoaded", function(){
    console.log("hello-pix")
    const firstpixel = document.querySelector(".pixel")
    firstpixel.addEventListener("mouseenter",boxFill)
    //Step2 filling the screen with pixels
    //* loops, document.createElement, 
    //* <anyDomElement>.classList.add, <anyDomElement>.append 
    
    for(i=0; i<8099;i++){
        const box = document.createElement("div")
        box.classList.add("pixel")
        box.addEventListener("mouseenter",boxFill)
        screen.append(box)
    }
    clearBtn.addEventListener("click",clearAll)
    //Step3 making all the pixels function like our original
    //* event.target, document.querySelectorAll, event
})
function boxFill(event) {
    event.target.classList.add("colored-in")
}
//Step4 the clear screen button
//* document.querySelectorAll, <anyDomElement>.classList.remove
function clearAll() {
    const pixels = document.querySelectorAll(".pixel")
    pixels.forEach(function(j){
        j.classList.remove("colored-in")
    })
}

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
