// The magic happens here!
const screen= document.querySelector("#screen")
const pixel = document.querySelector(".pixel")
const clear = document.querySelector("#clear-screen-button")
console.log("Here")
const startHover = ()=>{
    console.log("Here")
    const pixelVar = document.querySelector(".pixel")
    pixelVar.addEventListener('mouseover',function(){
        console.log("Here")
         pixelVar.classList.add("colored-in")
    })
}
const getScreenSize = () =>{
    let x = screen.offsetWidth
    let y =screen.offsetHeight
    let a =pixel.offsetHeight
    let b =pixel.offsetWidth
    console.log(screen)
    console.log(x)
    console.log(y)
   return((x*y)/(a*b))

}
getScreenSize()
const createPixels =()=>{
    let value = getScreenSize()
    for(let i = 0;i<value;i++)
    {
        const pixel = document.createElement("div")
        pixel.setAttribute("class","pixel")
        screen.append(pixel)
        pixel.addEventListener('mouseover',function(){
        console.log("Here")
        pixel.classList.add("colored-in")})
    }

}

const clearPixel =()=>{
    clear.addEventListener("click",()=>{
        let pix =document.querySelectorAll('.pixel')
        for(let i =0;i<pix.length;i++)
        {
            console.log(pix[i])
            pix[i].classList.remove("colored-in")
            
        }

        
    })
}

document.addEventListener("DOMContentLoaded",function(){
    console.log("Here")
startHover()
createPixels()
getScreenSize()
clearPixel()

})


