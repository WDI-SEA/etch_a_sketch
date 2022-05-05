// The magic happens here!

// try to get mouseenter to work
// listen to the mouse enter event
// target is the .pixel class
// apply the #colored-in class to the div
// no mouseleave event

// clear button will return all divs to #pixel class

const pixel = document.querySelector('.pixel')

document.addEventListener('DOMContentLoaded', ()=>{
    
    pixel.addEventListener('mouseenter', event => {
        pixel.style.backgroundColor = 'black'
        console.log('mouseenter')
    })
    
  






})