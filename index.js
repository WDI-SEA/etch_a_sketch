const pix = document.querySelector(".pixel")
const screen = document.querySelector("#screen")


const colorPix = (e) => {
    e.target.classList.add("colored-in")
}

const makePix = () => {
    for(let i = 0; i < 8003; i++){
        const divPix = document.createElement('div')
        divPix.classList.add('pixel')
        divPix.addEventListener("mouseenter", colorPix)
        screen.append(divPix)
    }
}
makePix()



