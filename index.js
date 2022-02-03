// The magic happens here!
console.log('I can do this! maybe *\o/')


const makeScreen = () => {
  for (let i = 0; i < 2800; i++) {
    const square = document.createElement('div')
    square.classList.add('pixel')
    document.querySelector('#screen').appendChild(square)
    console.log(square.length)

    const change = (event) => {
      event.target.classList.add('colored-in')
    }
    square.onmouseenter= change

    document.addEventListener('click', event => {
      square.classList.remove("pixel")
      console.log(square)
    })
    
  }
  
}

document.addEventListener('DOMContentLoaded', () => {
  makeScreen()
})

document.addEventListener('click', () => {
  makeScreen()
})

