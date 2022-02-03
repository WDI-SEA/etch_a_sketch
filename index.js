// The magic happens here!
console.log('I can do this! maybe *\o/')

const pixel = document.querySelector('.pixel')
const screen = document.querySelector('.screen')

const change = (event) => {
  event.target.classList.add('colored-in')
}


pixel.onmouseenter = change;

// function mouseEnter() {
//   pixels.classList.add(.colored-in);
// }
// //add pixel divs to the dom
// // document.addEventListener('DOMContentLoaded', ()=> {
// //   // console.log()
// //   mouseEnter()
// // })

// mouseEnter()*