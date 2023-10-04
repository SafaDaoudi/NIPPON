// FORSIDE
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




// SE UDVALG
// var infoknap = document.getElementById('infoknap');
// var indhold = document.getElementById('indholdpopup');


// infoknap.addEventListener('click', function() {
//     indhold.style.display = "block";
// });




function showPic(){
    document.getElementById("indhold").style.display = "block";
    document.getElementById("indhold").style.animationName ="openup";
}

document.getElementById("infoknap").addEventListener("click", showPic);


function hidePic(){
    document.getElementById("indhold").style.display = "none";

}
document.getElementById("indhold").addEventListener("click", hidePic);
