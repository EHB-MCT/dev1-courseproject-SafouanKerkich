"use strict";

// Importeren van Context, Utils and noise
import context from './context.js';
import * as Utils from './Utils.js';
import * as Noise from './Noise.js';

// Canvas setup
function setupCanvas() {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    drawStarrySky();
}

window.addEventListener('resize', setupCanvas);
setupCanvas();

// Funnctie om 1 ster te tekenen
function drawStar(x, y, size, brightness) {
    context.beginPath();
    context.arc(x, y, size, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
    context.fill();
}

// Functioe om meerdere sterren te genereren
function drawStarrySky() {
    context.fillStyle = '#000';
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    const numberOfStars = Math.floor((context.canvas.width * context.canvas.height) / 3000);

    for (let i = 0; i < numberOfStars; i++) {
        const x = Utils.randomNumber(0, context.canvas.width);
        const y = Utils.randomNumber(0, context.canvas.height);
        const size = Math.random() * 3 + 1;
        const brightness = Math.random() * 0.8 + 0.2;

        drawStar(x, y, size, brightness);
    }
}
