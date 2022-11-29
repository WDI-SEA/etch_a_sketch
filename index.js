//     for(let i = 0; i <5000; i++){
//      const pixel =document.createElement('div')
//      const screen = document.querySelector('#screen')
//      screen.style.lineHeight='0' 
//      pixel.style.height="1vh"
//      pixel.style.width='1vh'
//      pixel.style.display='inline-block'
//      pixel.style.backgroundColor='white'
//      pixel.style.border='1px solid black'
//     screen.appendChild(pixel)
//     pixel.addEventListener('mouseenter', function(){
//         pixel.style.backgroundColor='black'
//         pixel.classList.add('clicked')
//     })   
// }
// let clear = document.querySelector('button')
// clear.addEventListener('click', function(){
//    let h = document.querySelectorAll('.clicked')
//    for(let x in h){
//      h[x].style.backgroundColor='white'
//    }
//     })


let screen = document.querySelector('#screen')
let pixel = document.querySelector('.pixel')

let clearButton = document.querySelector('#clear-screen-button')
let startButton =document.querySelector('#start-screen-button')
let stopButton =document.querySelector('#stop-screen-button')
pixel.addEventListener('mouseenter',function(){
    pixel.classList.add('colored-in')
})
for(let i =0; i<6619;i++){
    let newPixel = document.createElement('div')
    newPixel.classList.add('pixel')
    newPixel.addEventListener('mouseenter',function(e){
        e.target.classList.add('colored-in')
    })
    screen.append(newPixel)

}
// function start(){
//     let everyPixel=document.querySelectorAll('.pixel')
//     everyPixel.forEach(function(p){
//         p.addEventListener('mouseenter',addColorClass)
//     })
// }
// function addColorClass(el){
//     el.classList.add('colored-in')
// }
// function removeDrawing (){
//     let everyPixel = document.querySelectorAll('.pixel')
//     everyPixel.forEach(function(p){
//         p.removeEventListener('mouseenter',)
//     })
// }

function clearFunction(){
    let everyPixel = document.querySelectorAll('.pixel')
    everyPixel.forEach(function(p){
        p.classList.remove('colored-in')
    })
}
clearButton.addEventListener('click',clearFunction)
// stopButton.addEventListener('click',removeDrawing)
// startButton.addEventListener('click',start)
