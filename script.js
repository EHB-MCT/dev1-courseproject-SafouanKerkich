"use strict";

// Canvas opzetten
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

console.log("Canvas:", canvas);
console.log("Context:", context);


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
}

function drawBackground() {
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
