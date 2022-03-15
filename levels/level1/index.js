// import platform from "./img/platform.png"

import Player from "./Player.js";
import Platform from "./Platforms.js";
import GenericObject from "./GenericObjects.js";
import {platfomCollision} from './util.js';
import InputHandler from "./input.js"

window.addEventListener("load", function(){
const platfom = document.querySelector("#platform");
const platfomSmallTall = document.querySelector("#smallplatform");
const hills = document.querySelector("#hills");
const spriteRunLeft = document.querySelector("#spriteRunLeft");
const spriteRunRight = document.querySelector("#spriteRunRight");
const spriteStandLeft = document.querySelector("#spriteStandLeft");
const spriteStandRight = document.querySelector("#spriteStandRight");
const background = document.querySelector("#backgroud");
const terror = this.document.querySelector('#terror')

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const image = {
  platfom,
  platfomSmallTall,
  hills,
  spriteRunLeft,
  spriteRunRight,
  spriteStandLeft,
  spriteStandRight,
  background,
  terror
};

var genericObjects = [
  new GenericObject({ x: -1, y: -1, image: image.background }),
  new GenericObject({ x: -1, y: -1, image: image.hills }),
];

var platforms = [
  new Platform({ x: -1, y: 470, image: image.platfom }),
  new Platform({ x: image.platfom.width - 2, y: 470, image: image.platfom }),
  new Platform({ x: image.platfom.width * 2 + 100, y: 470, image: image.platfom }),
  new Platform({ x: image.platfom.width * 3 + 100, y: 470, image: image.platfom }),
  new Platform({ x: image.platfom.width * 4 + 100, y: 470, image: image.platfom }),
  new Platform({
    x: image.platfom.width * 4 + 100,
    y: 470,
    image: image.platfomSmallTall,
  }),
];

var player = new Player(image, ctx, platforms, genericObjects);


const input = new InputHandler();

  function animate() {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 66, 66);

    genericObjects.forEach((genericObject) => {
      genericObject.draw(ctx);
    });

    platforms.forEach((platform) => {
      platform.draw(ctx);
    });
    
    player.update(ctx, input.lastKey, input.keys);

    platfomCollision(platforms,player);


    requestAnimationFrame(animate);
  
  }
  animate();

});




// init(image,c);
// export let animate = new  Animate()
// animate.animate()
// Animate.animate()
// Animate.animate();
