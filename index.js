console.log('it works!')

let firstSquare = document.querySelector('.pixel')
let screen = document.querySelector('#screen')
let start = document.querySelector('#start')
let clear = document.querySelector('#clear-screen-button')

firstSquare.addEventListener('mouseenter', (e) => {
    firstSquare.classList.add('colored-in')
})

start.addEventListener('click', makePixels)
    
    function makePixels () {
        for (let i=0; i<20000; i++) {
            const square = document.createElement('div')
            square.classList.add('pixel')
            screen.appendChild(square)
            
            square.addEventListener('mouseenter', (e) => {
                square.classList.add('colored-in')
                
            });
        }
        clear.addEventListener('click', (e) => {
            const cubes = document.querySelectorAll('.colored-in');
            console.log(cubes)
            cubes.forEach(cube => {
                cube.classList.remove('colored-in')})
            })
    } 

