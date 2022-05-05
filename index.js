// document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.pixel').addEventListener('mouseenter',() => {
        document.querySelector('.pixel').classList.add('colored-in')
        

    })

    
    
    
    const screen = document.getElementById('screen')

    for(let i = 0; i < 6423; i++) {

        let pixel = document.createElement('div')
        pixel.classList.add('pixel')
        //    let screen = document.getElementById('screen')
        pixel.addEventListener('mouseenter', (e) => {
            e.target.classList.add('colored-in')
        })
        screen.append(pixel)
    }
    
    const clearButton = document.getElementById('clear-screen-button')
    // console.log(clearButton)
    clearButton.addEventListener('click', () => {
        const pixelList = document.querySelectorAll('.pixel')
        console.log(pixelList)
        pixelList.forEach(element=>element.classList.remove('colored-in'))
    })
    
    
