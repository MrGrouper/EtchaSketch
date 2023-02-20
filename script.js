const xSize = 65*3;
const ySize = 45*3;
var xLoc = Math.round(xSize/2);
var yLoc = Math.round(ySize/2);

function makeGrid(xAxis, yAxis) {
    grid.style.gridTemplateRows = `repeat(${yAxis} ,1fr)`;
    grid.style.gridTemplateColumns = `repeat(${xAxis} ,1fr)`;

    for (j = 1; j < yAxis+1; j++) {
        for (i = 1; i < xAxis+1; i++){
        let cell = document.createElement("div");
        cell.classList.add('cell');
        cell.setAttribute('id', `cell(${i},${j})`);
        cell.setAttribute('draggable', false);
        grid.appendChild(cell);
    };
         
};      
};

makeGrid(xSize,ySize);
var loc = document.getElementById(`cell(${xLoc},${yLoc})`);


let keysPressed = {};

window.addEventListener('keydown', function(e) {
    
    keysPressed[e.key] = true;
    
    if (keysPressed[e.key] && e.key === 'ArrowLeft'){
        e.preventDefault()
        xLoc--
    }
    if (keysPressed[e.key] && e.key === 'ArrowRight'){
        e.preventDefault()
        xLoc++
    }
    if (keysPressed[e.key] && e.key === 'ArrowUp'){
        e.preventDefault()
        yLoc--
    }
    if (keysPressed[e.key] && e.key === 'ArrowDown'){
        e.preventDefault()
        yLoc++
    }
    
    if (xLoc <= xSize && xLoc > 0 && yLoc <= xSize && yLoc > 0) {
        loc = document.getElementById(`cell(${xLoc},${yLoc})`);
        loc.style.backgroundColor = '#000000'
    } 
});


document.addEventListener('keyup', function(e){
   keysPressed[e.key] = false;
});

const resetBtn = document.querySelector('#erase_btn')
resetBtn.addEventListener("click", () => {
    document.getElementById('red-plastic').classList.add('shake')
    
    var delay = setTimeout(function(){
        document.getElementById('red-plastic').classList.remove('shake');
    }, 3000);
    shake();
  }) 

function shake(){
    var cells = document.getElementsByClassName('cell');
    for(i = 0; i< cells.length; i++ ) {
    
        cells.item(i).style.backgroundColor = ('rgba(0,0,0,0')
        }
    
}