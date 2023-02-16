
function makeGrid(size) {
    grid.style.gridTemplateRows = `repeat(${size} ,1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size} ,1fr)`;

    for (c = 0; c< (size ** 2); c++) {
        let cell = document.createElement("div");
        cell.classList.add('cell');
        cell.setAttribute('draggable', false);
        cell.addEventListener('mouseover', function(e) {
            if(e.buttons == 1) {
                e.preventDefault();
                var shadeValue = window.getComputedStyle(e.target, null).getPropertyValue('background-color');
                cell.style.backgroundColor = toggle(shadeValue, 0,0);
            }
        });
        grid.appendChild(cell);
    };
};

function toggle(shadeValue, shady, wacky) {
    if (shady === 1 && wacky === 0) {
        return changeColor(shadeValue);
    }
    else if (shady === 0 && wacky === 1) {
        return getWacky(1);
    }
    else if (shady === 1 && wacky === 1) {
        return getWonky(shadeValue);
    }
    else {return '#000000'}
}

function changeColor(shadeValue) {
    
    var colorArray = shadeValue.slice(shadeValue.indexOf("(")+1, shadeValue.indexOf(")")).split(", ");
    var newAlpha = +colorArray[3] + .2
    var newColorArray = [colorArray[0], colorArray[1],colorArray[2],newAlpha]
    console.log(`rgb(${newColorArray[0]}, ${newColorArray[1]}, ${newColorArray[2]}, ${newColorArray[3]})`);
    return `rgb(${newColorArray[0]}, ${newColorArray[1]}, ${newColorArray[2]}, ${newColorArray[3]})`
}

function getWacky(alpha){
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);

    return `rgb(${a}, ${b}, ${c}, ${alpha})`;
}

function getWonky(shadeValue){
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    var colorArray = shadeValue.slice(shadeValue.indexOf("(")+1, shadeValue.indexOf(")")).split(", ");
    var newAlpha = +colorArray[3] + .2
    var newColorArray = [colorArray[0], colorArray[1],colorArray[2],newAlpha]
    console.log(`rgb(${newColorArray[0]}, ${newColorArray[1]}, ${newColorArray[2]}, ${newColorArray[3]})`);
    return `rgb(${a}, ${b}, ${c}, ${newColorArray[3]})`
}

makeGrid(64);
