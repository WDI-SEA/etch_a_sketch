// The magic happens here!
document.addEventListener('DOMContentLoaded', () => {
    
    let etchBox = document.querySelector('#screen');
    let clear = document.querySelector('#clear-screen-button');
    
    for(let i = 0; i < 10000; i++) {
        var makePixels = document.createElement('div');
        makePixels.setAttribute("class", "pixel")
        etchBox.appendChild(makePixels);
    }

    let p = document.querySelectorAll('.pixel');

    function etchasketch() {
        p.forEach(e => {
            let test = function() {
                e.style.backgroundColor = 'rgb(0, 0, 0)';
            }
            e.addEventListener('mouseenter', test)
        })
    }  

    etchasketch()
    
    clear.addEventListener('click', () => {
        p.forEach(e => {
            e.style.backgroundColor = 'rgb(255, 255, 255)';
        })
    })   
})