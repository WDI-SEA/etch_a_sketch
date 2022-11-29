let screen = document.getElementById('screen')
let button = document.getElementById('clear-screen-button')

document.addEventListener('DOMContentLoaded', () => {
    for (let i =1; i < 4000; i++){
        const square = document.createElement('div')
        square.classList.add('pixel')
        screen.appendChild(square)
        square.addEventListener('mouseenter', () => {
            square.classList.add('colored-in')
        })
    }

    button.addEventListener('click',()=>{
        let divs = document.querySelectorAll('div')
        divs.forEach(div => {
            div.classList.remove('colored-in')
        })
    })
})