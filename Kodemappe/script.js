/******* Billedkarrusel *******/
// Variable:
const førstefoto = document.getElementById("førstefoto");
const midterfoto = document.getElementById("midterfoto");
const sidstefoto = document.getElementById("sidstefoto");

const venstrepil = document.getElementById("venstrepil"); 
const hoejrepil = document.getElementById("højrepil");


// Array
const carousel = [førstefoto, midterfoto, sidstefoto];

carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";

// Knapper med billeder af pile
højrepil.addEventListener("click", naesteBillede);
venstrepil.addEventListener("click", forrigeBillede);

// Funktioner
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[2]);
    carousel.pop();
    carousel[0].style.display = "block";
}
