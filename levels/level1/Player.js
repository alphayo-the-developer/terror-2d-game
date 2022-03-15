import { standingLeft, standingRight } from "./playerState.js";

var gravity = 0.8;

export default class Player {
    constructor(image,ctx, platforms, genericObjects) {
      this.image = image.spriteStandRight;
      this.terror = image.terror;
      this.speed = 10;
      this.states = [ new standingRight(this, platforms, genericObjects), new standingLeft(this, platforms, genericObjects)];
      this.currentState = this.states[0];
      this.position = {
        x: 100,
        y: 100,
      };
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.width = 66;
      this.height = 150;
      this.frames = 0;
      this.sprites = {
        stand: {
          right: image.spriteStandRight,
          left: image.spriteStandLeft,
          cropWidth: 177,
          width: 66
        },
        run: {
          right: image.spriteRunRight,
          left: image.spriteRunLeft,
          cropWidth: 341,
          width: 127.875
        },
      };

      this.currentSprite = this.sprites.stand.right;
      this.currentCropWidth = 177;
    }

    draw(c) {
      //  c.fillStyle = "red";
      //  c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(
        this.terror,
        this.position.x,
        this.position.y,
        100,
        170,
        
      );
    }

    update(c, input, keys) {
      // this.frames++;
      // if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right) || this.currentSprite === this.sprites.stand.left) {
      //   this.frames = 0;
      // }else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right) || this.currentSprite === this.sprites.run.left) {
      //   // this.frames = 0;
      // }
      this.currentState.handleInput(input, keys);

      this.draw(c);

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;


      if (this.position.y + this.height + this.velocity.y <= 576) {
        this.velocity.y += gravity;
        console.log(55)

        // } else {
        //   this.velocity.y = 0;
      }
    }

    setState(state, keys){
      this.currentState = this.states[state];
      this.currentState.enter(keys);
    }
  }