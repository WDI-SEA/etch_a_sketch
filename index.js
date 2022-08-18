// The magic happens here!

document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('#screen')
    for (let i = 0; i < 6400; i++) {
        const div = document.createElement('div');
        div.classList.add('pixel');
        screen.append(div);
    }
    const pixel = document.querySelectorAll('.pixel');
    for (let i = 0; i < pixel.length; i++) {
        pixel[i].addEventListener('mouseenter', function(e) {
            e.target.classList.add('colored-in');

        })
    }

    const clear = document.querySelector('#clear-screen-button')
    clear.addEventListener('click', function(e) {
        const coloredIn = document.querySelectorAll('.colored-in')
        for (let i = 0; i < coloredIn.length; i++) {
            coloredIn[i].classList.remove('colored-in')
        }
        
    })
})