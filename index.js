document.addEventListener('DOMContentLoaded',() => {
    let screen = document.querySelector('#screen')
        for (let i = 0; i < 7000; i++) {
        const newDivs = document.createElement('div')
        newDivs.classList.add('pixel')
        screen.append(newDivs)
        }
        document.querySelectorAll('.pixel').forEach((e) => {
            e.addEventListener('mouseenter', () => {
                e.classList.add('colored-in')
            })
        })

        let clearscreen = document.querySelector('#clear-screen-button')
        clearscreen.addEventListener('click', () => {
            document.querySelectorAll('.colored-in').forEach((e) => {
                e.classList.remove('colored-in')
            })
        })
    })