// FORSIDE


/******* Billedkarrusel *******/
// Variable:
let førstefoto = document.getElementById("førstefoto");
let midterfoto = document.getElementById("midterfoto");
let sidstefoto = document.getElementById("sidstefoto");

let venstrepil = document.getElementById("venstrepil"); 
let hoejrepil = document.getElementById("højrepil");



// Array

let carousel = [førstefoto, midterfoto, sidstefoto];

førstefoto.style.display = "block";
midterfoto.style.display = "none";
sidstefoto.style.display = "none";

// Knapper med billeder af pile
hoejrepil.addEventListener("click", naesteBillede);
venstrepil.addEventListener("click", forrigeBillede);

// Funktioner
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

// Funktion til at skifte til næste billede
function visnaesteBillede() {
    if (førstefoto.style.order === '1') {
        førstefoto.style.order = '2';
        midterfoto.style.order = '3';
        sidstefoto.style.order = '1';
    } else if (midterfoto.style.order === '1') {
        førstefoto.style.order = '1';
        midterfoto.style.order = '2';
        sidstefoto.style.order = '3';
    } else {
        førstefoto.style.order = '3';
        midterfoto.style.order = '1';
        sidstefoto.style.order = '2';
    }
}

// Funktion til at skifte til forrige billede
function visforrigeBillede() {
    if (førstefoto.style.order === '1') {
        førstefoto.style.order = '3';
        midterfoto.style.order = '1';
        sidstefoto.style.order = '2';
    } else if (midterfoto.style.order === '2') {
        førstefoto.style.order = '2';
        midterfoto.style.order = '3';
        sidstefoto.style.order = '1';
    } else { (sidstefoto.style.order === '3') 
        førstefoto.style.order = '1';
        midterfoto.style.order = '2';
        sidstefoto.style.order = '3';
    }
}