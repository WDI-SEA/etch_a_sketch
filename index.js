// The magic happens here!

// try to get mouseenter to work
// listen to the mouse enter event
// target is the .pixel class
// apply the #colored-in class to the div
// no mouseleave event

// clear button will return all divs to #pixel class


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
     pixelBoard() // fills pixels

    // single pixel event
    // pixel.addEventListener('mouseenter', e => {
    //     pixel.style.backgroundColor = 'black'
    //     console.log('mouseenter')
    // })

    // const screen = document.querySelector('#parent')

    // screen.addEventListener('mouseenter', e => {
    //     e.target.classList.add('colored-in')
    // })

    document.querySelectorAll('.pixel').forEach(pixel => 
        pixel.addEventListener('mouseenter',() => pixel.style.backgroundColor = 'black')
        )
    






})