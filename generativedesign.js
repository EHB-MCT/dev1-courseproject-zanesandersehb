import contexta from "./script/context.js";
import * as Utils from "./script/utils.js";

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawRandomShapes() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let width = canvas.width;
  let height = canvas.height;

  let numCircles = Utils.randomNumber(2, 4);
  let numRectangles = Utils.randomNumber(3, 5);
  let numTriangles = Utils.randomNumber(2, 5);

  // functie voor cirkels
  for (let i = 0; i < numCircles; i++) {
    let radius = Utils.randomNumber(0.05 * width, 0.1 * width);
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);
    context.fillStyle = Utils.randomColor();
    Utils.fillCircle(x, y, radius);
  }

  // functie voor rechthoeken
  for (let i = 0; i < numRectangles; i++) {
    let rectWidth = Utils.randomNumber(0.1 * width, 0.2 * width);
    let rectHeight = Utils.randomNumber(0.1 * height, 0.2 * height);
    let x = Utils.randomNumber(0, width - rectWidth);
    let y = Utils.randomNumber(0, height - rectHeight);
    context.fillStyle = Utils.randomColor();
    context.fillRect(x, y, rectWidth, rectHeight);
  }

  // functie voor driehoeken
  for (let i = 0; i < numTriangles; i++) {
    context.beginPath();
    let x1 = Utils.randomNumber(0, width);
    let y1 = Utils.randomNumber(0, height);
    let x2 = Utils.randomNumber(0, width);
    let y2 = Utils.randomNumber(0, height);
    let x3 = Utils.randomNumber(0, width);
    let y3 = Utils.randomNumber(0, height);
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(x3, y3);
    context.closePath();
    context.fillStyle = Utils.randomColor();
    context.fill();
  }
}

function init() {
  resizeCanvas();
  drawRandomShapes();
}

window.addEventListener("resize", init);
window.addEventListener("load", init);
