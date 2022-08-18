const screen = document.querySelector("#screen");
const clearBtn = document.querySelector("#clear-screen-button");

const fillBoard = () =>
{
    for (let i = 0; i < 7937; i++)
    {
        const newPixel = document.createElement("div");
        newPixel.classList.add("pixel");
        screen.append(newPixel);
        newPixel.addEventListener("mouseenter", () =>
        {
            newPixel.classList.add("colored-in")
        })
    }
}
clearBtn.addEventListener("click", () =>
{
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(pixel =>
    {
        pixel.classList.remove("colored-in");
    })
})

document.addEventListener("DOMContentLoaded", () =>
{
    fillBoard();
})