document.addEventListener('DOMContentLoaded',() => {
    let screen = document.querySelector('#screen')
        for (let i = 0; i < 6000; i++) {
        const newDivs = document.createElement('div')
        newDivs.classList.add('pixel')
        screen.append(newDivs)
        }
        document.querySelectorAll('.pixel').forEach((e) => {
            e.addEventListener('mouseover', () => {
                e.classList.add('colored-in')
            })
        })

        // screen.document.forEach(('div') => {

        // }

    //  let pixel = document.forEach(newDivs)
    //  });
    // //create an event listener where if we mouse over
    // //the div, it adds class colored in
    // //which changes the pixel back ground color
    //     pixel.addEventListener('mouseover', () => {
    //     pixel.classList.add('colored-in')
    //     })
})