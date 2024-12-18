"use strict";

// Canvas en context opzetten
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// Variabelen
const stars = []; // Array om sterren op te slaan
const numberOfStars = 1000; // Aantal sterren
let mouseX = 0, mouseY = 0; // Muiscoördinaten
const interactionRadius = 50; // Straal voor interactie

// Canvasgrootte instellen
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (stars.length === 0) { // Alleen initialiseren als sterren nog niet bestaan
        initializeStars();
    }
}

// Sterren initialiseren
function initializeStars() {
    stars.length = 0; // Leeg de sterrenarray
    for (let i = 0; i < numberOfStars; i++) {
        const size = Math.random() * 2 + 1; // Willekeurige grootte
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: size,
            originalSize: size,
            twinkleSpeed: Math.random() * 0.02 + 0.01, // Snelheid van glinsteren
            phase: Math.random() * Math.PI * 2, // Willekeurige faseverschuiving
        });
    }
}

// Sterren tekenen met glinsteren en muisinteractie
function drawStars(time) {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for (const star of stars) {
        // Bereken helderheid met glinsteren
        const brightness = 0.5 + Math.sin(time * star.twinkleSpeed + star.phase) * 0.5;

        // Controleer of de ster binnen het interactiegebied van de muis is
        const distance = Math.hypot(star.x - mouseX, star.y - mouseY);
        const size = distance < interactionRadius ? Math.min(star.originalSize * 2, 10) : star.originalSize;

        context.beginPath();
        context.arc(star.x, star.y, size, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${brightness})`;
        context.fill();
    }
}

// Animatie starten
function animateStars() {
    const time = performance.now() / 1000; // Tijd in seconden
    drawStars(time); // Teken de sterren met glinsteren
    requestAnimationFrame(animateStars); // Herhaal animatie
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
