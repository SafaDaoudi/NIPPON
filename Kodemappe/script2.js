// SE UDVALG

// Variable:
const infoknap = document.getElementById("infoknap"); 
const indhold = document.getElementById("indholdpopup");



// Array:
infoknap.addEventListener("click",visBox);


//Det der skal ske når der klikkes på infokanp:
function visBox(){
     indhold.style.display = "inline";
    //  indhold.style.animationName = "openup";
 }
