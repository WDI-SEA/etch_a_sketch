// The magic happens here!

// try to get mouseenter to work
// listen to the mouse enter event
// target is the .pixel class
// apply the #colored-in class to the div
// no mouseleave event

// clear button will return all divs to #pixel class

const pixel = document.querySelector('.pixel')

const screen = document.getElementById('screen')
const pixelBoard = () => {
    //multiply the number of pixel divs
    for(let i = 0; i < 7496; i++){
        // create new div
        const add = document.createElement('div')
        // add css class for pixel shape
        add.classList.add('pixel')
        // append div to the container
        document.querySelector('#screen').append(add)
    } 
}

document.addEventListener('DOMContentLoaded', ()=>{
    
    pixel.addEventListener('mouseenter', event => {
        pixel.style.backgroundColor = 'black'
        console.log('mouseenter')
    })
    pixelBoard()
    
    






})