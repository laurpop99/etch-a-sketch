const createGrid = function(){

    for( i = 1; i <= 256; i++)
    {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseenter", function(){
        box.style.background = "black";
    })
    }
    
    }
    
    const clearGrid = function(){
    
    
    for(i = 1; i <= 256; i++)
    {
        document.querySelectorAll(".box")
        
    }
    
    }
    

const resetButton = document.createElement("button");
resetButton.textContent = "RESET BOARD";
resetButton.style.width = "100px";
header.appendChild(resetButton);

resetButton.addEventListener("click",clearGrid);
createGrid();