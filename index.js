const grid = () => {
  for (let i = 0; i < 6100; i++) {
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");
    document.querySelector("#screen").append(pixel);
  }
  const allOfThePixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < allOfThePixels.length; i++) {
    allOfThePixels[i].addEventListener("mouseenter", () => {
      allOfThePixels[i].classList.add("colored-in");
    });
  }

  //SHORTEND VERSION
  //  for (let i = 0; i < 6100; i++) {
  //    const pixel = document.createElement("div");
  //    pixel.classList.add("pixel");
  //    document.querySelector("#screen").append(pixel);
  //    pixel.addEventListener("mouseenter", () => {
  //       pixel.classList.add("colored-in");
  //     })
  //  }
};

document.querySelector("#clear-screen-button").addEventListener("click", () => {
  const allOfThePixels = document.querySelectorAll(".pixel");
  for (let i = 0; i < allOfThePixels.length; i++) {
    allOfThePixels[i].classList.remove("colored-in");
  }
});

grid();
