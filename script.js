// setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStarrySky();
}



setupCanvas(); 

