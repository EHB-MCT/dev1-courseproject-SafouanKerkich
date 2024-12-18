"use strict";

// Canvas en context opzetten
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Variabelen
const stars = []; 
const numberOfStars = 1000; 
let mouseX = 0, mouseY = 0; 
const interactionRadius = 50; 

// Canvasgrootte instellen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
}

// Sterren initialiseren
function initializeStars() {
    stars.length = 0; 
    for (let i = 0; i < numberOfStars; i++) {
        const size = Math.random() * 2 + 1; 
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: size,
            originalSize: size,
            twinkleSpeed: Math.random() * 2 + 1, 
            phase: Math.random() * Math.PI * 2, 
        });
    }
}

// Sterren tekenen glinsteren
function drawStars(time) {
    
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Loop sterren
    for (const star of stars) {
        // Helderheid berekenen
        const brightness = 0.5 + Math.sin(time * star.twinkleSpeed + star.phase) * 0.5;

        
        const distance = Math.hypot(star.x - mouseX, star.y - mouseY);
        const size = distance < interactionRadius ? star.originalSize * 2 : star.originalSize;

        // Ster tekenen
        context.beginPath();
        context.arc(star.x, star.y, size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${brightness})`; 
        context.fill();
    }
}

// Animatie starten
function animateStars() {
    const time = performance.now() / 1000; 
    drawStars(time); 
    requestAnimationFrame(animateStars); 
}

// Muispositie bijhouden
canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = event.clientX - rect.left;
    mouseY = event.clientY - rect.top;
});

// Event listener voor resize
window.addEventListener("resize", resizeCanvas);

// Initialiseren en animatie starten
resizeCanvas();
initializeStars();
animateStars();
