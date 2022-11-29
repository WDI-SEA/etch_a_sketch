const pixel = document.querySelector('.pixel')

// console.log(pixel)




document.addEventListener('DOMContentLoaded', () => {

    // pixel.addEventListener('mouseenter', () => {
    //     pixel.classList.add('colored-in')
    //     // pixel.style.backgroundColor = 'black'  ---- Also works
    // })
    
    for (let i = 0; i < 6929; i ++) {
        const morePixels = document.createElement('div')
        morePixels.classList.add('pixel')
        document.querySelector('#screen').appendChild(morePixels)
        
    }

    const pixels = document.querySelectorAll('.pixel')

    

    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () => {
         pixel.classList.add('colored-in')
       })
     })

})



  document.querySelector('#clear-screen-button').addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel')
    pixels.forEach(pixel => pixel.classList.remove('colored-in'))
  })

  