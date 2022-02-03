// The magic happens here!
console.log('I can do this! maybe *\o/')

// const mouseenter = (event) => {
//   let pixels = document.querySelectorAll('.pixel')
//   // pixels.classList.add('.colored-in') //currently a nodelist
//   // event.preventDefault();
//   console.log(pixels)
// }
// event.onmouseenter = change;
// const screen = document.querySelector('#screen')
// const pixel = document.getElementsByTagName('.pixel')
// const change = ()=> {

// } document.getElementsByName('colored-in')

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
    // square.addEventListener('event', () => {
      
      
    // })
    // let pixelss = document.querySelectorAll('pixel')
    // const change = (event) => {
    // console.log(typeof pixelss)
  }

}

// const change = (event) => {
//   event.target.classList.add('colored-in')
  
// }


document.addEventListener('DOMContentLoaded', () => {
  makeScreen()
  // mouseenter()
//   // const mouseEnter = (event) => {
//   //   // pixel.pixel.classList.add('.colored-in');
//   //   // event.preventDefault();
//   //   console.log(event)
//   // }
})

// makeScreen()
// mouseEnter()
// console.log(pixel)

// //add pixel divs to the dom
// // document.addEventListener('DOMContentLoaded', ()=> {
// //   // console.log()
// //   mouseEnter()
// // })

// mouseEnter()*