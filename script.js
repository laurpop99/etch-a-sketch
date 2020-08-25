const resetButton = document.createElement("button");
const grid = document.querySelector("#container");
resetButton.textContent = "RESET BOARD";
resetButton.style.width = "100px";
header.appendChild(resetButton);

const initialGrid = function(){
    for( i = 1; i <= 16 * 16 ; i++)
    {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    let random = function(){
        return Math.floor(Math.random() * 361);
    }
    let light = 50;
    let hueColor = random();
    box.addEventListener("mouseenter", function(){
        
        
        if(box.style.background === "")
            {
            
            box.style.background = `hsl(${hueColor}, 100%, ${light}%)`;
            }
        else
            {
                let prevColor = hueColor;
            light -= "5";
            box.style.background = `hsl(${prevColor}, 100%, ${light}%)`;
            
                
            
            }
           
            
    })
        
    }
}
initialGrid();
resetButton.addEventListener("click", function(){
    const input = prompt("How many squares per side for the new grid?");
    clearGrid();
    createGrid(input);
});


const createGrid = function(input){
    let random = function(){
        return Math.floor(Math.random() * 361);
    }

    console.log(input);
    grid.style.gridTemplateColumns = `repeat(${input}, auto)`;
    grid.style.gridTemplateRows = `repeat(${input})`;

    for( i = 1; i <= input*input; i++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        let light = 50;
    let hueColor = random();
        box.addEventListener("mouseenter", function(){
            if(box.style.background === "")
            {
            
            box.style.background = `hsl(${hueColor}, 100%, ${light}%)`;
            }
        else
            {
                let prevColor = hueColor;
            light -= "5";
            box.style.background = `hsl(${prevColor}, 100%, ${light}%)`;
            console.log(light);
                
            
            }
            
        })
    }   
}

const clearGrid = function(){
    const box = document.querySelectorAll(".box");
    for(let i = 0; i < box.length; i++)
    {
        box[i].style.background = "white";
        box[i].remove();
    }
    
}






createGrid();