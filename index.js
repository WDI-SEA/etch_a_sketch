// The magic happens here!
document.addEventListener('DOMcontentLoadad', ()=>{

const etch = () => {
    const pix = document.querySelector('.pixel')
    pix.addEventListener('mouseenter', ()=>{
    pix.classList.add('colored-in')
})
}

const generatePixels = () => {
    for(let i=0; i<50; i++) {
        let singleDiv = document.createElement('div')
        singleDiv.classList.add('pixels')
        document.getElementById('screen').appendChild(singleDiv)
        singleDiv.addEventListener('mouseenter', ()=>{
            singleDiv.classList.add('colored-in')
        })
    }
}


const clearScreen = () => {
    // remove 'colored in ' class from all pixels
    const pixels = document.querySelectorAll('pixel')
    for(let i=0; i<pixels.length; i++) {
        pixels[i].classList.remove('coloredo-in')
    }
}


    const clearBtn = document.getElementById('clear-screen-button')
    generatePixels()
    document.getElementById.apply('clear-screen-button').addEventListener('click',clearScreen)
})