document.addEventListener("DOMContentLoaded", function(){  
    getSize()
    //createCanvas();
    changeColour()
    //reloadCanvas(); 
    //changeSize();
    //reloadCanvas();
})

//CURRENTLY GETSIZE() IS CREATING CANVAS CORRECTLY


//let size = 16;
let userInput  = '';
const sizeInput = document.querySelector('#btnSize')

function createCanvas(size){
    let container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`; 

    let numDiv = (size * size)

    for (i=0; i < numDiv; i++){
        let div = document.createElement('div');
        container.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    document.querySelector('.button').addEventListener('click', (e) => {
        userInput = prompt("Pick a size between 1-100");
        if(userInput > 100 || userInput < 0 ){
            alert('Pick a number between 1-100, ya dingus!');
        } else {
            size = userInput;
            createCanvas(size);    
        }
        
  });
}



function reloadCanvas(){
    createCanvas();
}



