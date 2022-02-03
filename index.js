// // The magic happens here!
const sketchArea = document.querySelector("screen");

const createPixels = (pixelCount) => {
  for (let i = 1; i <= pixelCount; i++) {
    const pixel = document.createElement("div");
    pixel.setAttribute("id", i);
    pixel.classList.add("pixel");
    document.getElementById("screen").appendChild(pixel);
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

//fills etch area
createPixels(etchArea());

const etch = (event) => {
  if (event.target.nodeName === "DIV") {
    document.getElementById(event.target.id).classList.add("colored-in");
  }
};

const clearSketchArea = (event) => {
  if (event.target.nodeName === "BUTTON") {
    for (let i = 1; i <= etchArea(); i++) {
      document.getElementById(i).classList.remove("colored-in");
    }
  }
};

window.addEventListener("mouseover", etch);
window.addEventListener("click", clearSketchArea);
