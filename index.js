// how many pixels to make on the screen
const pixelCount = 6400

document.addEventListener('DOMContentLoaded', () => {
  // code graveyard from step 1
  // const pixel = document.querySelector('.pixel')
  // pixel.addEventListener('mouseenter', () => {
  //   pixel.classList.add('colored-in')
  // })
  // console.dir(pixel)
  // step 2
  const screen = document.querySelector('#screen')
  for (let i = 0; i < pixelCount; i++) {
    // create the el
    const pixel = document.createElement('div')
    // set the props (add pixel class and an event listenter)
    pixel.classList.add('pixel')
    // easy mode
    // pixel.addEventListener('mouseenter', () => {
    //   pixel.classList.add('colored-in')
    // })
    // mount el on the DOM
    screen.appendChild(pixel)
  }

  // querySelectorAll
  const pixels = Array.from(document.querySelectorAll('.pixel'))
  // best practices is to convert NodeList to Array
  // const pixelArray = Array.from(allPixels) // convets weird iterable object into a good ol Array

  // loop over the pixels and add event listeners
  pixels.forEach(pixel => {
     pixel.addEventListener('mouseenter', () => {
      pixel.classList.add('colored-in')
    })
  })

  // clear the screen
  document.querySelector('#clear-screen-button').addEventListener('click', () => {
    // snag of the the pixel classes -- covert wierd iterable object Array proper
    const pixels = Array.from(document.querySelectorAll('.pixel'))
    // forEach the pixels and remove the colored class
    pixels.forEach(pixel => pixel.classList.remove('colored-in'))
  })
})