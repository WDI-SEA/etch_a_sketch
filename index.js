let container = document.querySelector('.container');
let screen = document.querySelector('#screen')
let clearButton = document.querySelector('#clear-screen-button')
// let pixel = document.querySelector('.pixel').addEventListener('mouseenter', entering);
// function entering(p) {
//     p.currentTarget.style.backgroundColor = 'black';
//     console.log('mouseenter p');
// }
// **COULD NOT GET PAST STEP 1 😢


let pixel = document.querySelector('.pixel')
pixel.addEventListener('mouseenter', ()=> {
    pixel.classList.add('colored-in')
})

//loop thru and make new pixels
for (let i =0; i < 3134; i++) {
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    //add mouseEnter functionality
    newPixel.addEventListener('mouseenter', (e) =>{
        e.target.classList.add('colored-in')
    })
    screen.append(newPixel)
}

let clearFunction = function() {
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(pixel =>{
        pixel.classList.remove('colored-in')
    })
}

clearButton.addEventListener('click', clearFunction)




