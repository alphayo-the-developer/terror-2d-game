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
    this.keys = {
      right: {
        pressed: false,
      },
      left: {
        pressed: false,
      },
    };
    // this.keydown = keydown;
    // this.keyup = keyup;
  }

  animate() {
    requestAnimationFrame(animate.animate);
    c.fillStyle = "white";
    c.fillRect(0, 0, 66, 66);

    var player = animate.obj[0];
    var platfom = animate.obj[1];
    var genericObjects = animate.obj[2];
    // var b = animate.keydown();
    // console.log(b)

    genericObjects.forEach((genericObject) => {
      genericObject.draw();
    });

    platfom.forEach((platform) => {
      platform.draw();
    });
    player.update();

    //platfom collision detection
    platfom.forEach((platform) => {
      if (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >=
          platform.position.y &&
        player.position.x + player.width >= platform.position.x &&
        player.position.x <= platform.position.x + platform.width
      ) {
        player.velocity.y = 0;
        // console.log(player.velocity.y)
      }
    });

    document.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "a":
        case "ArrowLeft":
          animate.keys.left.pressed = true;
          animate.lastKey = "left";

          break;
        case "d":
        case "ArrowRight":
          animate.keys.right.pressed = true;
          animate.lastKey = "right";
          break;
        case "w":
        case "ArrowUp":
          player.velocity.y -= 0.11;
          break;
        default:
          break;
      }
    });

    addEventListener("keyup", ({ key }) => {
      switch (key) {
        case "a":
        case "ArrowLeft":
          animate.keys.left.pressed = false;
          break;
        case "d":
        case "ArrowRight":
          animate.keys.right.pressed = false;
        
          break;
        case "w":
        case "ArrowUp":
          console.log(player.velocity.y)

          animate.obj[0].velocity.y += 0.11;
          break;
        default:
          break;
      }
    });

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
