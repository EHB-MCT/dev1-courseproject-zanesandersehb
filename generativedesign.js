import context from "../../script/context.js";
import * as Utils from "../../script/utils.js";

// Haal het canvas en de context op
let canvas = document.getElementById("flowerCanvas");
let context = canvas.getContext("2d");

// Functie om het canvas te initialiseren met de juiste grootte
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Zorg ervoor dat het canvas de juiste grootte heeft bij het laden van de pagina
resizeCanvas();

// Functie om een willekeurige kleur te genereren
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Functie om een bloem te tekenen
function drawFlower(x, y, petalCount, petalLength, petalWidth) {
  let angle = (Math.PI * 2) / petalCount; // Hoek tussen de bloemblaadjes

  // Bloemblad tekenen
  for (let i = 0; i < petalCount; i++) {
    let petalColor = getRandomColor(); // Willekeurige kleur voor elk bloemblaadje
    context.beginPath();
    context.ellipse(
      x + Math.cos(i * angle) * 50, // X-positie van het bloemblaadje
      y + Math.sin(i * angle) * 50, // Y-positie van het bloemblaadje
      petalLength, // Lengte van het bloemblaadje
      petalWidth, // Breedte van het bloemblaadje
      i * angle, // Rotatiehoek van het bloemblaadje
      0, // Begin van het ellipsboog
      Math.PI * 2 // Eind van het ellipsboog
    );
    context.fillStyle = petalColor; // Stel de vulkleur in
    context.fill(); // Vul het bloemblaadje
  }

  // Bloemcentrum tekenen
  let centerColor = getRandomColor();
  context.beginPath();
  context.arc(x, y, 30, 0, Math.PI * 2); // Teken een cirkel voor het centrum
  context.fillStyle = centerColor; // Stel de vulkleur in
  context.fill();
}

// Roep de functie aan om de bloem te tekenen
drawFlower(canvas.width / 2, canvas.height / 2, 8, 100, 40);

// Voeg event listener toe om de canvas opnieuw in te stellen bij schermresizing
window.addEventListener("resize", () => {
  resizeCanvas();
  drawFlower(canvas.width / 2, canvas.height / 2, 8, 100, 40); // Vernieuw de bloem bij resize
});
