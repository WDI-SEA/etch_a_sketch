
const screen = document.querySelector('#screen')
const pixel = document.querySelectorAll('.pixel')
const clearButton = document.getElementById('clear-screen-button')

for (let i = 0; i <4525; i++) {
        let div = document.createElement('div')
        div.classList.add('pixel')
        screen.appendChild(div)
    }
    document.querySelectorAll('.pixel').forEach(p =>
    p.addEventListener('mouseover', e => {
      e.target.classList.toggle('colored-in');
    }),
  );

  function clear() {
    document.querySelectorAll('.pixel').forEach(p => p.classList.remove('colored-in'))
  }
 
  clearButton.addEventListener('click', clear)

  