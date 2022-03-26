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
const background = document.querySelector("#backgroud");
const idle = this.document.querySelector('#idle');
const idle_bat = this.document.querySelector('#idle_bat');
const idle_bat_attack = this.document.querySelector('#idle_bat_attack');
const idle_aim_transition = this.document.querySelector('#idle_aim_transition');
const hurt = this.document.querySelector('#hurt');
const hurt_bat = this.document.querySelector('#hurt_bat');
const death = this.document.querySelector('#death');
const death_bat = this.document.querySelector('#death_bat');
const crouch_start = this.document.querySelector('#crouch_start');
const crouch_shot = this.document.querySelector('#crouch_shot');
const crouch_reload = this.document.querySelector('#crouch_reload');
const crouch_idle = this.document.querySelector('#crouch_idle');
const bullet_shell_drop_short = this.document.querySelector('#bullet_shell_drop_short');
const bullet_shell_drop_long = this.document.querySelector('#bullet_shell_drop_long');
const bullet_fly = this.document.querySelector('#bullet_fly');
const belly_sliding = this.document.querySelector('#belly_sliding');
const belly_sliding_start = this.document.querySelector('#belly_sliding_start');
const belly_sliding_and_shot = this.document.querySelector('#belly_sliding_and_shot');
const bullet_impact = this.document.querySelector('#bullet_impact');
const run = this.document.querySelector('#run');
const run_shot_up = this.document.querySelector('#run_shot_up');
const run_shot_down = this.document.querySelector('#run_shot_down');
const run_reload = this.document.querySelector('#run_reload');
const run_bat = this.document.querySelector('#run_bat');
const run_bat_attack = this.document.querySelector('#run_bat_attack');
const run_aim_transition = this.document.querySelector('#run_aim_transition');
const reload = this.document.querySelector('#reload');
const jump = this.document.querySelector('#jump');
const jump_shot = this.document.querySelector('#jump_shot');
const jump_fall = this.document.querySelector('#jump_fall');
const jump_bat = this.document.querySelector('#jump_bat');
const jump_bat_fall = this.document.querySelector('#jump_bat_fall');
const jump_bat_attack = this.document.querySelector('#jump_bat_attack');

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;

const image = {
  platfom,
  platfomSmallTall,
  hills,
  background,
  idle,
  idle_bat,
  idle_bat_attack,
  idle_aim_transition,
  hurt,
  hurt_bat,
  death,
  death_bat,
  crouch_start,
  crouch_shot,
  crouch_reload,
  crouch_idle,
  bullet_shell_drop_short,
  bullet_shell_drop_long,
  bullet_fly,
  belly_sliding,
  belly_sliding_start,
  belly_sliding_and_shot,
  bullet_impact,
  run,
  run_shot_up,
  run_shot_down,
  run_reload,
  run_bat,
  run_bat_attack,
  run_aim_transition,
  reload,
  jump,
  jump_shot,
  jump_fall,
  jump_bat,
  jump_bat_fall,
  jump_bat_attack
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
let lastTime = 0;
  function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 66, 66);

    genericObjects.forEach((genericObject) => {
      genericObject.draw(ctx);
    });

    platforms.forEach((platform) => {
      platform.draw(ctx);
    });
    
    player.update(ctx, input.lastKey, input.keys, deltaTime);

    platfomCollision(platforms,player);


    requestAnimationFrame(animate);
  
  }
  animate(0);

});




// init(image,c);
// export let animate = new  Animate()
// animate.animate()
// Animate.animate()
// Animate.animate();
