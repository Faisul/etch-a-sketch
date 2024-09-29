function createGrid(gridSize) {
    let container = document.querySelector("#container");
    container.textContent = '';
    let div;
    for (let i=0; i < gridSize*gridSize; i++) {
        div = document.createElement("div");
        // div.textContent = i+1;
        div.setAttribute("class", "item");
        div.style.flexBasis =  `${100 / gridSize}%`;
        div.style.height = `${container.clientWidth/gridSize}px`;
        div.style.background='grey';
        container.appendChild(div);
    }

    container.addEventListener("mouseover", function(event){
        // console.log("hovered");
        if( event.currentTarget !== event.target) {
            event.target.style.background = '';
            event.target.setAttribute("class", "touched");
        }
        
    });
}


// createGrid();
function start() {
   let text = document.querySelector("input");   

   let btn = document.querySelector("button");
   btn.addEventListener("click", function(event){
    let gridSize = text.value;
    if(gridSize<0 || gridSize >100) {
        alert("gridsize cannot be less than '0' or greater than '100'");
        return;
    }

    console.log(gridSize);
    createGrid(gridSize);
    text.value = '';
   });
}

start();