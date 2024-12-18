"use strict";

// Canvas setup
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Variabelen
const stars = []; 
const numberOfStars = 500; 

// Canvasgrootte instellen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars(); 
    drawStars(); 
}

// Sterren 
function initializeStars() {
    stars.length = 0; 
    for (let i = 0; i < numberOfStars; i++) {
        stars.push({
            x: Math.random() * canvas.width, 
            y: Math.random() * canvas.height, 
            size: Math.random() * 2 + 1, 
        });
    }
}

// Sterren tekenen
function drawStars() {
    context.fillStyle = "black"; 
    context.fillRect(0, 0, canvas.width, canvas.height); 

    context.fillStyle = "white"; 
    for (const star of stars) {
        context.beginPath();
        context.arc(star.x, star.y, star.size, 0, Math.PI * 2); 
        context.fill();
    }
}

// Event listener voor resize
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); 
