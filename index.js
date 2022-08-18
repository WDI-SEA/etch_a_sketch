// The magic happens here!
document.addEventListener('DOMContentLoaded', () => {
    

    let etchBox = document.querySelector('#screen');
    let clear = document.querySelector('#clear-screen-button');
    
    for(let i = 0; i < 6824; i++) {
        var makePixels = document.createElement('div');
        makePixels.setAttribute("class", "pixel")
        etchBox.appendChild(makePixels);
    }
    let p = document.querySelectorAll('.pixel');

    let onOff = 0;
    function etchasketch() {
        onOff++
        console.log(onOff)
        if(onOff % 2 != 0){
            p.forEach(e => {
                e.addEventListener('mouseenter', () => {
                    e.style.backgroundColor = 'rgb(0, 0, 0)';
                })
            })
        } else {
            p.forEach(e => {
                e.removeEventListener('mouseenter', () => {
                    e.style.backgroundColor = 'rgb(0, 0, 0)';
                })
            })
        }
        
    }

    

    etchBox.addEventListener('click', etchasketch)
    
    clear.addEventListener('click', () => {
        p.forEach(e => {
            e.style.backgroundColor = 'rgb(255, 255, 255';
        })
    })
    
        

    
    
})