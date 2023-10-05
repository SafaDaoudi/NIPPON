// prisoversigt

function totalClick(click) {
    const totalClickElement = document.getElementById('totalClick');
    const sumValue = parseInt(totalClickElement.innerText);
    const updatedValue = sumValue + click;
    console.log(updatedValue);
    totalClickElement.innerText = updatedValue;

    //ungå negative tal
    if(sumValue < 0) {
        totalClick.innerText = 0;
    }
}
