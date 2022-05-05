const screen = document.getElementById("screen");
const pixel = document.querySelector(".pixel");

document.addEventListener("mouseover", (e) => {
  if (e.target.className === "pixel") {
    console.log("hello?");
    let ppixel = e.target;
    ppixel.classList.add("colored-in");
  }
});

const addPix = function () {
  for (i = 0; i < 6000; i++) {
    const newpix = document.createElement("div");
    newpix.classList.add("pixel");
    screen.append(newpix);
  }
};
addPix();

const btn = document.getElementById("clear-screen-button");
btn.addEventListener("click", function () {
  function clearAll() {
    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach(function (j) {
      j.classList.remove("colored-in");
    });
    clearAll();
  }

  //   let coloredIn = document.querySelectorAll("div");

  //   //   console.log("yo??????");
  //   coloredIn.classList.remove("colored-in");

  //   //   document.querySelectorALL("colored-in").classList.remove("colored-in");

  //   console.log("yo");
});
// document.querySelectorAll("div").classList.remove("colored-in");
