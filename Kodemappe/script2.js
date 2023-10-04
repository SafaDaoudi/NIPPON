// SE UDVALG

// Variable:

// let infoknap = document.getElementById("infoknap"); 
let infoknapper = document.querySelectorAll("#infoknap");


// let lukknappen = document.getElementById("luk");
let lukknap = document.querySelectorAll("#lukKnap");



let indhold = document.getElementById("indholdpopup");
// let helesiden = document.getElementById("retterBaggrund");


// Boxen åbner:
infoknapper.forEach(function(åbenBox) {
åbenBox.addEventListener("click",visBox);
});



//Det der skal ske når der klikkes på infokanp:
function visBox(){
     indhold = this.nextElementSibling;
     indhold.style.display = "inline";
    //  indhold.style.animationName = "openup";
 }


//Boxen lukker :
lukknap.forEach(function(luk) {
 luk.addEventListener("click",lukBox);
 });

//Det der skal ske når der klikkes på luk-knappen:
 function lukBox(){
   let indhold = this.parentElement.parentElement;
   indhold.style.display = "none";
 }



//  protein.addEventListener("click",visProteinBox);

//  function visProteinBox(){
//    proteinBox.style.display = "block";
//  }



// Se udvalg - Ikon siden åbner og lukker
let protein = document.getElementById("protein");
let proteinBox = document.getElementById("proteinKatalog");
let lukProteinKnap = document.getElementById("lukProtein")
let åbenIkon = document.getElementById("ikonFoto");


åbenIkon.addEventListener("click", visKatalog);

function visKatalog(){
proteinBox.style.display = "block";
protein.style.display = "none";
}

lukProteinKnap.addEventListener("click", lukKatalog);

function lukKatalog(){
proteinBox.style.display = "none";
protein.style.display = "flex";
}



