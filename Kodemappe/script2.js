// SE UDVALG

// Variable:

// let infoknap = document.getElementById("infoknap"); 
let infoknapper = document.querySelectorAll("#infoknap");


// let lukknappen = document.getElementById("luk");
let lukknap = document.querySelectorAll("#lukKnap");



let indhold = document.getElementById("indholdpopup");
// let helesiden = document.getElementById("retterBaggrund");

// Get the button and collapsible content element by their IDs
var button = document.getElementById("næringsindholdknap");
var content = document.getElementById("collapsible-content");


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


// Se udvalg - Ikon siden åbner og lukker:
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





//Se udvalg - Valg af retter med markering:
//Idéen er at når man trykker på billedet af retten
// som her i JavaScript hedder "billedet" (retten i HTML),
// så skal hele diven, den der hedder "retter" (card i HTML)
// få en rød border.

//Det fungere hvis det er billedet der skal have en border.
//Hvis det er hele diven ("card"), så fungere det ikke - hmm...

// Virker kun på det første billed!

let billedet = document.getElementById("retten");
let retter = document.getElementById("cardID");
let vælge2Retter = document.getElementById("retterBaggrund");
let grønneKasse = document.getElementById("rettensNavn");




let billede1 = true;
billedet.addEventListener("click", rødMarkering);

function rødMarkering(){

  if(billede1){
    billedet.style.borderTop = "0px";
    billedet.style.borderLeft = "0px";
    billedet.style.borderRight = "20px";
    billedet.style.borderBottom = "0px";
    billedet.style.borderStyle = "solid";
    billedet.style.borderColor = "#27406B";
    billedet.style.borderRadius = "14px";
    billede1 = false;
  }
  else{
  billedet.style.borderTop = "0px";
  billedet.style.borderLeft = "0px";
  billedet.style.borderRight = "0px";
  billedet.style.borderBottom = "0px";
  billedet.style.borderStyle = "none";
  billedet.style.borderColor = "transparent";
  billede1 = true;
  }
  
}




// Add a click event listener to the button
button.addEventListener("click", function() {
  // Toggle the display property of the content element
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    button.textContent = "Skjul næringsindhold"; // Change button text when content is visible
  } else {
    content.style.display = "none";
    button.textContent = "Se næringsindhold"; // Change button text when content is hidden
  }
});



    //For at fjerne den røde markering - VIRKER IKKE!
// grønneKasse.addEventListener("click", fjernMarkering);

    // function fjernMarkering(){
//   billedet.style.borderTop = "0px";
//   billedet.style.borderLeft = "0px";
//   billedet.style.borderRight = "0px";
//   billedet.style.borderBottom = "0px";

//   billedet.style.borderStyle = "none";
//   billedet.style.borderColor = "transparent";
// }



    //For at fjerne den røde markering - VIRKER IKKE!
// vælge2Retter.addEventListener("click", fjernMarkering);

// function fjernMarkering(){
  //   billedet.style.borderTop = "0px";
  //   billedet.style.borderLeft = "0px";
  //   billedet.style.borderRight = "0px";
  //   billedet.style.borderBottom = "0px";
  
  //   billedet.style.borderStyle = "none";
  //   billedet.style.borderColor = "green";
  // }
  
  
        // Fjernelse af markeringen ved kun at trykke på billedet - VIRKER IKKE!
    // billedet.addEventListener("click", ingenMarkering);
    // function ingenMarkering(){
    //   billedet.style.borderTop = "0px";
    //   billedet.style.borderLeft = "0px";
    //   billedet.style.borderRight = "0px";
    //   billedet.style.borderBottom = "0px";
    
    //   billedet.style.borderStyle = "none";
    //   billedet.style.borderColor = "transparent";
    //   billedet.style.borderRadius = "0px";
    // }

  
  // Markering af hele diven - VIRKER IKKE!
  // function rødMarkering(){
    //   retter.style.borderTop = "0px";
    //   retter.style.borderLeft = "0px";
    //   retter.style.borderRight = "20px";
    //   retter.style.borderBottom = "0px";
    
    //   retter.style.borderStyle = "solid";
    //   retter.style.borderColor = "#27406B";
    //   retter.style.borderRadius = "14px";
    // }
    
    