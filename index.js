// // The magic happens here!
const buttonClear = document.getElementById("clear-screen-button");

const createPixels = (pixelCount) => {
  for (let i = 1; i <= pixelCount; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    document.getElementById("screen").appendChild(pixel);
    pixel.addEventListener("mouseenter", () => {
      pixel.classList.add("colored-in");
    });
    buttonClear.addEventListener("click", () => {
      pixel.classList.remove("colored-in")
    })
  
  }
  
};

const etchArea = () => {
  const height = document.getElementById("screen").offsetHeight;
  const width = document.getElementById("screen").offsetWidth;
  //   console.log(`${width} X ${height}`);
  //const area = (width *height)/100;
  const area = 6400;
  return area;
};

document.addEventListener("DOMContentLoaded", () => {
  createPixels(etchArea());
});
