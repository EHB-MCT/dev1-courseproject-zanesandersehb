let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

const circles = [];
const numCircles = 100;
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FFF333"];
let mousePosition = { x: 0, y: 0 };

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

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

function signature() {
  const boxWidth = 50;
  const boxHeight = 50;
  const baseX = canvas.width - 350;
  const baseY = canvas.height - 350;

  context.fillStyle = "black";
  context.beginPath();
  context.rect(baseX, baseY, 300, 300);
  context.stroke();
  context.fill();
  context.closePath();

  // Groene vakjes tekenen
  drawBox(baseX + 75, baseY, boxWidth, boxHeight);
  drawBox(baseX + 125, baseY, boxWidth, boxHeight);
  drawBox(baseX + 175, baseY, boxWidth, boxHeight);
  drawBox(baseX + 75, baseY + 100, boxWidth, boxHeight);
  drawBox(baseX + 125, baseY + 100, boxWidth, boxHeight);
  drawBox(baseX + 175, baseY + 100, boxWidth, boxHeight);
  drawBox(baseX + 125, baseY + 150, boxWidth, boxHeight);
  drawBox(baseX + 75, baseY + 200, boxWidth, boxHeight);
  drawBox(baseX + 25, baseY + 200, boxWidth, boxHeight);
  drawBox(baseX + 175, baseY + 200, boxWidth, boxHeight);
  drawBox(baseX + 225, baseY + 200, boxWidth, boxHeight);
}

function drawBox(x, y, width, height) {
  context.fillStyle = "green";
  context.beginPath();
  context.rect(x, y, width, height);
  context.fill();
  context.closePath();
}

function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  circles.forEach((circle) => circle.update());

  signature();

  requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (event) => {
  mousePosition.x = event.clientX;
  mousePosition.y = event.clientY;
});

createCircles();
animate();
