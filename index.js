// The magic happens here!
console.log('I can do this! maybe *\o/')

const pixel = document.querySelector('.pixel')
const screen = document.querySelector('#screen')

const mouseEnter = (event) => {
  pixel.classList.add('.colored-in');
  console.log(event)

}

// event.onmouseenter = change;


const makeScreen = () => {
  for (let i = 0; i < 2800; i++) {
    const square = document.createElement('pixel')
    square.classList.add('pixel')
    screen.appendChild(square)
  }

}

// const change = (event) => {
//   event.target.classList.add('colored-in')
  
// }
// 

makeScreen()


// //add pixel divs to the dom
// // document.addEventListener('DOMContentLoaded', ()=> {
// //   // console.log()
// //   mouseEnter()
// // })

// mouseEnter()*