console.log("is this workin");

document.addEventListener('DOMContentLoaded', () => {

})

const screen = document.querySelector('#screen')
const order = () => {
  for (let i = 0; i < 4793; i++) {
    let div = newPixel();
    screen.append(div);
  }
};

const newPixel = () => {
  let div = document.createElement("div");
  div.classList.add("pixel");
  div.addEventListener("mouseenter", shadePixel);
  return div;
}

const shadePixel = () => {
  event.target.classList.add("colored-in");
}


const clearMe = document.querySelector('#clear-screen-button')

const clear = event => {
    for(pixel of screen.children) {
        pixel.classList.remove('colored-in')
    }
}

document.addEventListener('DOMContentLoaded', order)

clearMe.addEventListener("click", clear)