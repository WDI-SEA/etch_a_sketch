
// Pixel one colored black during mouse enter event
const etch = () => {
    const pix = document.querySelector('.pixel')
    pix.addEventListener('mouseenter', () => {
        pix.classList.add('colored-in')
    })
}

// fill etch-a-sketch with pixels
const fillBoard = (numPixels) => {
        for (let i = 0; i<numPixels; i++) {
        //create div elements to fill board
        const newPix = document.createElement('div');
        // append child to screen id
        document.querySelector('#screen').appendChild(newPix);
        // add styling
        newPix.classList.add('pixel');
        //etch all
        newPix.addEventListener('mouseenter', () => {
            newPix.classList.add('colored-in')
    })
    }
}

// clear screen
let clearBoard = () => {
    const allPix = document.querySelectorAll('.pixel');
    const clearButton = document.getElementById('clear-screen-button');
    clearButton.addEventListener('click', () => {
        for (let i=0; i<allPix.length; i++) {
            allPix[i].classList.remove('colored-in');
    }
})
}

document.addEventListener('DOMContentLoaded', () => {
    etch();
    fillBoard(5600);
    clearBoard();
})