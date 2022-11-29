//the select screen
screen = document.querySelector('#screen')


const randRGB = () => {
    // console.log(Math.floor(Math.random() * 256))
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const randString = `rgb(${r}, ${g}, ${b})`
    // console.log(randString)
    return randString
}
// let randomColor = document.querySelector('colored-in')
// randomColor.style.backgrounColor = randRGB

//function for turning pixel black
function turnBlack (event) {
    event.target.classList.add('colored-in')
    // pixel.classList.add('colored-in')
}

//function for filling screen with white pixels
//you can only add an EventListener to a SINGLE element, you cannot add it to a class list
function createPixels () {
    console.log('pixels created fires')
    for(let i = 0; i < 5000 ; i++){
        let div = document.createElement('div')
        div.classList.add('pixel')
        screen.append(div)
        div.addEventListener("mouseenter", turnBlack)
    }
}
createPixels()

function reset () {
    // console.log('it fired')
    let resetColors = document.querySelectorAll('.pixel')
    resetColors.forEach((div) => {
        div.classList.remove('colored-in')
    })
     
}
//clear button
let clearButton = document.getElementById("clear-screen-button")
clearButton.addEventListener('click', reset)