// Chatgbt's kode

const venstrepil = document.getElementById('venstrepil');
const højrepil = document.getElementById('højrepil');
const førstefoto = document.getElementById('førstefoto');
const midterfoto = document.getElementById('midterfoto');
const sidstefoto = document.getElementById('sidstefoto');

// Funktion til at skifte til næste billede
function visNæsteBillede() {
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
function visForrigeBillede() {
    if (førstefoto.style.order === '1') {
        førstefoto.style.order = '3';
        midterfoto.style.order = '1';
        sidstefoto.style.order = '2';
    } else if (midterfoto.style.order === '1') {
        førstefoto.style.order = '2';
        midterfoto.style.order = '3';
        sidstefoto.style.order = '1';
    } else {
        førstefoto.style.order = '1';
        midterfoto.style.order = '2';
        sidstefoto.style.order = '3';
    }
}

// Kør funktionen til at skifte billeder automatisk hvert 3. sekund
// setInterval(visNæsteBillede, 2000);

// Lyt til klik på pilene
venstrepil.addEventListener('click', visForrigeBillede);
højrepil.addEventListener('click', visNæsteBillede);
