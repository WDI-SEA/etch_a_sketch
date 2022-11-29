const pixel = document.querySelector('.pixel')
const screen = document.querySelector('#screen')
const clear = document.querySelector('#clear-screen-button')

pixel.addEventListener('mouseenter', (e) => {
  e.target.classList.add('colored-in')
})

for (let i = 0; i < 8000; i++) {
  const newPixel = document.createElement('div')
  newPixel.classList.add('pixel')
  newPixel.addEventListener('mouseenter', (e) => {
    e.target.classList.add('colored-in')
  })
  screen.appendChild(newPixel)
}

clear.addEventListener('click', () => {
  const allPixels = document.querySelectorAll('.pixel')
  allPixels.forEach(pix => {
    pix.classList.remove('colored-in')
  })
})
