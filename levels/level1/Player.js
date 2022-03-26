import { Idle ,IdleBat } from "./playerState.js";

var gravity = 0.8;

export default class Player {
    constructor(image,ctx, platforms, genericObjects) {
      // this.image = image.spriteStandRight;
      this.idle = image.idle;
      this.run = image.run;
      this.speed = 10;
      this.states = [ new Idle(this, platforms, genericObjects), new IdleBat(this, platforms, genericObjects)];
      this.currentState = this.states[0];
      this.position = {
        x: 100,
        y: 330,
      };
      this.velocity = {
        x: 0,
        y: 0,
      };
      this.width = 415;
      this.height = 442;
      this.frames = 0;
      this.sprites = {
        stand: {
          right: image.idle,
          // left: image.spriteStandLeft,
          cropWidth: 177,
          width: 394,
          height:409
        },
        run: {
          right: image.run,
          cropWidth: 394,
          width: 415,
          height:442
        },
        standbat: {
          right: image.idle_bat,
          cropWidth: 394,
          width: 415,
          height:442
        }
      };

      this.currentSprite = this.sprites.stand.right;
      this.currentSpriteState = this.sprites.stand
      this.currentCropWidth = 177;
      this.maxFrame = 6;
      this.x = 0;
      this.y = 0;
      this.fps = 60;
      this.frameTimer = 0;
      this.frameInterval = 1000/this.fps;
      this.gameFrame = 0;
      this.staggerFrame = 5;
    }

    draw(c, deltaTime) {
      //  c.fillStyle = "red";
      //  c.fillRect(this.position.x, this.position.y, this.width, this.height);
      // c.drawImage(
      //   this.run,
      //   this.position.x,
      //   this.position.y,
      //   100,
      //   170,
        
      // );
      
      if(this.frameTimer > this.frameInterval){
        if(this.frames< this.maxFrame) this.frames++
        else this.frames = 0;
        this.frameTimer = 0;
      }else {
        this.frameTimer += deltaTime;
      }

      let position = Math.floor(this.gameFrame/this.staggerFrame) % 6;
      this.frames = this.currentSpriteState.width * position;
      c.drawImage(this.currentSprite, this.frames,this.currentSpriteState.height,this.currentSpriteState.width,this.currentSpriteState.height,this.position.x,this.position.y,this.currentSpriteState.width/3,this.currentSpriteState.height/3);
      this.gameFrame++;
    }

    update(c, input, keys, deltaTime) {
      this.frames++;
      if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right) || this.currentSprite === this.sprites.stand.left) {
        this.frames = 0;
      }else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right) || this.currentSprite === this.sprites.run.left) {
        // this.frames = 0;
      }
      this.currentState.handleInput(input, keys);

      this.draw(c,deltaTime);

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;


      if (this.position.y + this.height + this.velocity.y <= 570) {
        this.velocity.y += gravity;

        // } else {
        //   this.velocity.y = 0;
      }
    }

    setState(state, keys){
      this.currentState = this.states[state];
      this.currentState.enter(keys);
    }
  }