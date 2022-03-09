// import platform from "./img/platform.png"

import init from "./init.js"
import Animate from "./animate.js"

const platfom = document.querySelector("#platform");
const platfomSmallTall = document.querySelector("#smallplatform");
const hills = document.querySelector("#hills");
const spriteRunLeft = document.querySelector("#spriteRunLeft");
const spriteRunRight = document.querySelector("#spriteRunRight");
const spriteStandLeft = document.querySelector("#spriteStandLeft");
const spriteStandRight = document.querySelector("#spriteStandRight");
const background = document.querySelector("#backgroud");

export const canvas = document.querySelector("canvas");

export const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

export const image = {
  platfom,
  platfomSmallTall,
  hills,
  spriteRunLeft,
  spriteRunRight,
  spriteStandLeft,
  spriteStandRight,
  background,
};

init(image,c);
export let animate = new  Animate()
animate.animate()
// Animate.animate()
// Animate.animate();
