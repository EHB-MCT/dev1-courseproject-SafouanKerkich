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

// functie voor sterrenhemel
function drawStarrySky() {
   
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
    const numberOfStars = Math.floor((canvas.width * canvas.height) / 3000); 

    for (let i = 0; i < numberOfStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 3 + 1; 
        const brightness = Math.random() * 0.8 + 0.2;

        drawStar(x, y, size, brightness);
    }
}