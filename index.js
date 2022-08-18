/*

const playerInput = document.getElementById('screen');

const screen = document.querySelector('screen')

createGrid = () => {
    console.log("createGrid")
    for (let i = 0; i < 256; i++) {
        const div = document.createElement("div")
        div.classList.add("pixel")
        playerInput.appendChild(div);
    }
};

updateGrid = () => {
    screen.innerHTML = "";
    screen.style.setProperty(
        "grid-template-columns",
        `repeat(${playerInput.value}, 2fr)`
    );
    screen.style.setProperty(
        "grid-template-rows",
        `repeat(${playerInput.value}, 2fr)`
        );

    for (let i = 0; i < playerInput.value * playerInput.value; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        grid.appendChild(div);
    }
    console.log(userInput.value);

    const pixel = document.querySelector('.pixel');
    pixel.addEventListener("mouseenter", function (event) {
        event.target.classList.add("colored-in");
    })
}
/*
const clearBtn = document.querySelector('#clear-screen-button')
clearBtn.addEventListener("click", function () {
    screen.innerHTML = "";
    playerInput.value = "";
    screen.style.setProperty("grid-template-columns", `repeat(16, 2fr)`);
    screenstyle.setProperty("grid-template-rows", `repeat(16, 2fr)`);
    createGrid();
});


createGrid()
*/
