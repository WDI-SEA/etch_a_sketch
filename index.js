// The magic happens here!
// console.log('I can do this! maybe *\o/')

// const makeScreen = () => {
//   for (let i = 0; i < 2800; i++) {
//     const square = document.createElement('div')
//     square.classList.add('pixel')
//     document.querySelector('#screen').appendChild(square)
//     console.log(square.length)

//     const change = (event) => {
//       event.target.classList.add('colored-in')
//     }
//     square.onmouseenter= change
//     console.log(square)

    // document.addEventListener('click', event => {
    //   square.classList.remove("pixel")
    //   console.log(square)
    // })
    
  // }
  
// }

// const clearScreen = () => {
//   const pixels = document.querySelectorAll('pixel')
//   console.log(pixels)
//   for (let i = 0; i < pixels.length; i++)
//     pixels[i].classList.remove('colored-in')
//     console.log(pixels)
// }

// document.addEventListener('DOMContentLoaded', () => {
//   makeScreen()
//   document.getElementById('clear-screen-button').addEventListener('click', clearScreen)
// })





// this works dummy
// const etch = () => {
//   const pix = document.querySelector('.pixel')
//   pix.addEventListener('mouseenter', () => {
//     pix.classList.add('colored-in')
//   })
// }


/*======codealong============*/
// const getContainer = document.getElementById('screen')
// let numOfPixels = 2999


const generatePixels = () => {
  for (let i = 0; i < 5000; i++){
  // create a new div element
    let singleDiv = document.createElement('div')
  // add a class to that new div
    singleDiv.classList.add('pixel')
  //append the ne div to the container div
    document.getElementById('screen').appendChild(singleDiv)
    //add color in event listener to new pixels
    singleDiv.addEventListener('mouseenter', () => {
    singleDiv.classList.add('colored-in')
    })
  } 
}

//clear button
const clearScreen = () => {
  //strat is to remove colored in class from all pixels
  const pixels = document.querySelectorAll('.pixel')
  //pixels.classList.remove('colored-interface) //this doenst work cuz it only does 1
  //for loop on nodelist
  for(let i=0; i<pixels.length; i++) {
    pixels[i].classList.remove('colored-in')
  }
}
document.addEventListener('DOMContentLoaded', () => {
  generatePixels()
  document.getElementById('clear-screen-button').addEventListener('click', clearScreen)
})