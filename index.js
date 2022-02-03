// The magic happens here!

let square = document.getElementById("first")


square.addEventListener("mouseenter", ()=>{


    square.removeAttribute("id")
    square.classList.add("colored-in")

})


let getContainer = document.getElementById("screen")

let numOfPixels = 29999;
for (let i = 0; i < numOfPixels; i++){
    
    
    let singleDiv = document.createElement("div")
    singleDiv.className ="pixel"
    getContainer.append(singleDiv)

    singleDiv.addEventListener("mouseenter", ()=>{

        singleDiv.classList.remove("pixel")
        singleDiv.classList.add("colored-in")

    })

    
}





let button = document.querySelector("button")

button.addEventListener("click", ()=>{

    square.classList.remove("colored-in")
    square.classList.add("pixel")

    let listOfDivs = document.querySelectorAll(".colored-in")

console.log(listOfDivs)
console.log(listOfDivs.length)

console.log(listOfDivs[2].classList[0])

let hi = 0
    for(let i = 0; i < listOfDivs.length; i++){
        
        if(listOfDivs[i].classList[0] === "colored-in"){

            listOfDivs[i].classList.remove("colored-in");
            listOfDivs[i].classList.add("pixel");
            console.log(listOfDivs[i].classList[0])
        }
        
    }
    
    console.log(hi)
})