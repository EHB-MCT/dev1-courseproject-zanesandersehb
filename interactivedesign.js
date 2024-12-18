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
