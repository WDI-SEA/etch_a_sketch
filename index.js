// The magic happens here!
document.addEventListener('DOMContentLoaded', () => {
console.log('hi')

    for(let i = 0; i < 4691; i++){
        const newPixel = document.createElement('div')
        newPixel.classList.add('pixel')

        document.querySelector('#screen').appendChild(newPixel)
    }


    const pixelClass = document.querySelectorAll('.pixel')
    // pixelClass.forEach((square, index) => {
    //     square.addEventListener("mouseover", () => {
    //         square.classList.add('colored-in')
    //     });
    // })
    for(let i = 0; i < pixelClass.length; i++){
        let pixel = pixelClass[i]
        pixel.addEventListener('mouseover', () => {
            pixel.classList.add('colored-in')
        });
    }

    const clearBtn = document.getElementById('clear-screen-button')
    
    clearBtn.addEventListener('click', () => {
        pixelClass.forEach(square => {
            square.classList.remove('colored-in')
        })
    })

    

   

})