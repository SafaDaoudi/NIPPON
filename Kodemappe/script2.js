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



//  //Variable:
// let næringsLink = document.getElementById("næring");
// let energi = document.getElementById("energi");

// //Når der klikkes på "Se næringsindhold" skal funktionen visEnergi ske:
// næringsLink.addEventListener("click",visEnergi);

// //Div'en "energi" vises
// function visEnergi(){
//    energi.style.display = "block";
// }



