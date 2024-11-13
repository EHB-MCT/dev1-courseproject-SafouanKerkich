// setup canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


function setupCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawStarrySky();
}



setupCanvas(); 

// Function for one star
function drawStar(x, y, size, brightness) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = rgba(255, 255, 255, ${brightness});
    ctx.fill();
}


