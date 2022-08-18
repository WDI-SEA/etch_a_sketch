document.addEventListener("DOMContentLoaded", () =>{
//variables
    const screen = document.querySelector('#screen')
    const pixel = document.querySelector('.pixel')

//add all the pixels 
    for(let i = 0; i < 6000; i++){
        let newPixel = document.createElement('div')
        newPixel.classList.add('pixel')
        screen.appendChild(newPixel)    
    }  

 //grab all the pixels
    const allPixels = document.querySelectorAll('.pixel')
        // console.log(allPixels)
    //loop through and add all the classes
        allPixels.forEach(pixel => {
            pixel.addEventListener('mouseenter', (e) => {
                pixel.classList.add("colored-in")
    })})

//clear button function  
    document.querySelector('#clear-screen-button').addEventListener("click", (e) => {
        allPixels.forEach(pixel =>{
            pixel.classList.remove("colored-in")
        })
    })
//nothing below here    
})
 