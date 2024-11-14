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

  let numCircles = Utils.randomNumber(3, 7);
  let numRectangles = Utils.randomNumber(2, 4);
  let numTriangles = Utils.randomNumber(2, 5);

  // functie voor cirkels
  for (let i = 0; i < numCircles; i++) {
    let radius = Utils.randomNumber(0.05 * width, 0.1 * width);
    let x = Utils.randomNumber(0, width);
    let y = Utils.randomNumber(0, height);
    context.fillStyle = Utils.randomColor();
    Utils.fillCircle(x, y, radius);
  }

