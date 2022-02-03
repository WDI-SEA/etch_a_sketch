console.log('hello')

const pixel = document.querySelector('.pixel')
const clearButton = document.querySelector('#clear-screen-button')

const changeColor = () => {
    pixel.classList.add('colored-in')
}

pixel.addEventListener('mouseenter', changeColor)

 const generatePixels = (numOfPixels) => {
     for (let i=0; i<numOfPixels;i++){
         const morePixels = document.createElement('div')
         morePixels.classList.add('pixel')
         document.querySelector('#screen').appendChild(morePixels)
         morePixels.addEventListener('mouseenter',()=>{
            morePixels.classList.add('colored-in')
         })
        }
}

const clearScreen = () => {
   const clearedPixel = document.querySelectorAll('.colored-in')
   for (let i=0; i<clearedPixel.length;i++){
   console.log(clearedPixel)
    clearedPixel[i].classList.remove('colored-in')
    }
}

clearButton.addEventListener('click', clearScreen)

generatePixels(8000)
