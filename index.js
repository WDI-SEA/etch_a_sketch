// The magic happens here!
let pix = document.querySelector('.pixel')
pix.addEventListener('mouseenter', () =>{
        pix.classList.add('colored-in')
    })

// let clrBtn = document.querySelector('#clear-screen-button')
    
const createPix = ()=>{
    for(let i =0; i <= 5050; i++){
        let pixel = document.createElement('div')
        pixel.classList.add('pixel')
        document.querySelector('#screen').appendChild(pixel)
        pixel.addEventListener('mouseenter', () =>{
        pixel.classList.add('colored-in')
        })
        // clrBtn.addEventListener('click', ()=>{
        // pixel.classList.remove('colored-in')
        // })
    }
}

document.addEventListener('DOMContentLoaded',() =>{

    createPix()
    
    
    
    let clrBtn = document.querySelector('#clear-screen-button')
    clrBtn.addEventListener('click', ()=>{
        let all = document.querySelectorAll('.colored-in')

        for(i = 0; i < all.length; i++)
        all[i].classList.remove('colored-in')

        })
})
