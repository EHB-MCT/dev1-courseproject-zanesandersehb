import contexta from "./script/context.js";
import * as Utils from "./script/utils.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const circles = [];
const numCircles = 100;
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFF333"];
let mousePosition = { x: 0, y: 0 };

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
// Circle class
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.originalColor = color;
    this.speedX = getRandom(-2, 2);
    this.speedY = getRandom(-2, 2);
  }

  // cirkel tekenen
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.speedX *= -1;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.speedY *= -1;
    }

    const dx = mousePosition.x - this.x;
    const dy = mousePosition.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.radius) {
      this.color = colors[Math.floor(Math.random() * colors.length)];
    } else {
      this.color = this.originalColor;
    }

    this.draw();
  }
}

function createCircles() {
  for (let i = 0; i < numCircles; i++) {
    const radius = getRandom(10, 30);
    const x = getRandom(radius, canvas.width - radius);
    const y = getRandom(radius, canvas.height - radius);
    const color = colors[Math.floor(Math.random() * colors.length)];
    circles.push(new Circle(x, y, radius, color));
  }
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle) => circle.update());

  requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

createCircles();
animate();
