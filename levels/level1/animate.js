// import {keydown,keyup} from "./controller.js";
import { canvas, c, image, animate } from "./index.js";
import init from "./init.js";

// canvas.width = 1024;
// canvas.height = 576;

export default class Animate {
  constructor() {
    this.lastKey, (this.scrolOffset = 0);
    this.obj = init(image, c);
    this.lastKey;
    
    // this.keydown = keydown;
    // this.keyup = keyup;
  }

  animate() {
    requestAnimationFrame(animate.animate);
    

    var player = animate.obj[0];
    var platfom = animate.obj[1];
    var genericObjects = animate.obj[2];
    // var b = animate.keydown();
    // console.log(b)

    

    

    

    // keyup();
    // move player and platforms
    // ||
    // animate.keys.left.pressed && animate.scrolOffset === 0;

    if (animate.keys.left.pressed && player.position.x > 100) {
      player.velocity.x = -player.speed;
    } else if (animate.keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else {
      player.velocity.x = 0;

      if (animate.keys.right.pressed) {
        animate.scrolOffset += player.speed;
        animate.obj[1].forEach((platforms) => {
          platforms.position.x -= player.speed;
        });
        genericObjects.forEach((genericObject) => {
          genericObject.position.x -= player.speed * 0.66;
        });
      } else if (animate.keys.left.pressed && animate.scrolOffset > 0) {
        animate.scrolOffset -= player.speed;

        animate.obj[1].forEach((platforms) => {
          platforms.position.x += player.speed;
        });
        genericObjects.forEach((genericObject) => {
          genericObject.position.x += player.speed * 0.66;
        });
      }
    }

     // sprite switching

      if(animate.keys.right.pressed && animate.lastKey === 'right' && player.currentSprite !== player.sprites.run.right){
        player.currentSprite = player.sprites.run.right;
        player.currentCropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width;
      } else if(animate.keys.left.pressed && animate.lastKey === 'left' && player.currentSprite !== player.sprites.run.left ) {
        player.currentSprite = player.sprites.run.left;
        player.currentCropWidth = player.sprites.run.cropWidth;
        player.width = player.sprites.run.width;

      }else if(!animate.keys.left.pressed && animate.lastKey === 'left' && player.currentSprite !== player.sprites.stand.left ) {
         player.currentSprite = player.sprites.stand.left;
         player.currentCropWidth = player.sprites.stand.cropWidth;
         player.width = player.sprites.stand.width;

      }else if(!animate.keys.right.pressed && animate.lastKey === 'right' && player.currentSprite !== player.sprites.stand.right ) {
        player.currentSprite = player.sprites.stand.right;
        player.currentCropWidth = player.sprites.stand.cropWidth;
        player.width = player.sprites.stand.width;

      }

    //  win condition
    if (animate.scrolOffset > platfom.width * 5 * 300 - 2) {
      console.log("you Win");
    }
    console.log(player.position.y)
    //loss condition
    if (player.position.y > 400) {
      init(image,c);
      document. location. reload()
    }
  }
}
