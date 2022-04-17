import { Idle ,IdleBat, Crouch } from "./playerState.js";

var gravity = 0.8;

export default class Player {
    constructor(image,ctx, platforms, genericObjects) {
      // this.image = image.spriteStandRight;
      this.idle = image.idle;
      this.run = image.run;
      this.speed = 10;
      this.states = [ new Idle(this, platforms, genericObjects), new IdleBat(this, platforms, genericObjects), new Crouch(this, platforms, genericObjects)];
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
          
          width: 394,
          height:409
        },
        run: {
          right: image.run,
          cropWidth: 394,
          width: 415,
          height:442
        },
        reload: {
          right: image.reload,
          vertical: true,
          width: 403,
          height:426
        },
        runreload: {
          right: image.run_reload,
          vertical: true,
          width: 425,
          height:468
        },
        standbat: {
          right: image.idle_bat,
          vertical: true,
          width: 297,
          height:467
        },
        runbat: {
          right: image.run_bat,
          vertical: true,
          width: 346,
          height: 488
        },
        idlebatattack: {
          right: image.idle_bat_attack,
          vertical: true,
          width: 779,
          height: 565
        },
        runbatattack: {
          right: image.run_bat_attack,
          vertical: true,
          width: 739,
          height: 627
        },
        crouchstart: {
          right: image.crouch_start,
          vertical: true,
          width: 569,
          height: 436
        },
        standcrouch: {
          right: image.standup,
          vertical: true,
          width: 569,
          height: 436
        },
        crouchidle: {
          right: image.crouch_idle,
          vertical: true,
          width: 569,
          height: 263
        }
        ,
        crouchreload: {
          right: image.crouch_reload,
          vertical: true,
          width: 569,
          height: 305
        }
        ,
        idleshoot: {
          right: image.shoot,
          vertical: true,
          width: 597,
          height: 407
        },
        idleshootup: {
          right: image.shootup,
          vertical: true,
          width: 533,
          height: 566
        },
        idleshootdown: {
          right: image.shootdown,
          vertical: true,
          width: 536,
          height: 397
        },
        idleshootvertical: {
          right: image.shootvertical,
          vertical: true,
          width: 256,
          height: 780
        }
        ,
        runshoot: {
          right: image.run_shot,
          vertical: true,
          width: 615,
          height: 442
        },
        runshootup: {
          right: image.run_shot_up,
          vertical: true,
          width: 550,
          height: 568
        },
        runshootdown: {
          right: image.run_shot_down,
          vertical: true,
          width: 552,
          height: 428
        },
        jump: {
          right: image.jump,
          vertical: true,
          width: 404,
          height: 673
        }
      };

      this.currentSprite = this.sprites.stand.right;
      // this.currentSprite = this.sprites.runbat.right;
      // this.currentSpriteState = this.sprites.runbat;
      this.currentSpriteState = this.sprites.stand
      this.currentCropWidth = 177;
      this.maxFrame = 6;
      this.framey = 0;
      this.x = 0;
      this.y = 0;
      this.fps = 60;
      this.frameTimer = 0;
      this.frameInterval = 1000/this.fps;
      this.gameFrame = 0;
      this.staggerFrame = 5;
      this.gravity = 5;
      this.shouldJump = false;
      this.jumpCounter = 0;
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
      // this.framey = this.currentSpriteState.height * position
      console.log(this.position.y)
      c.drawImage(this.currentSprite, this.frames,this.currentSpriteState.height * this.framey ,this.currentSpriteState.width,this.currentSpriteState.height,this.position.x,this.position.y,this.currentSpriteState.width/3,this.currentSpriteState.height/3);
      this.gameFrame++;
    }

    update(c, input, keys, deltaTime) {
      let position = Math.floor(this.gameFrame/this.staggerFrame) % 3;

      if(this.currentSpriteState.vertical){
        if(this.frameTimer > this.frameInterval){
          if(position == 2){
            this.framey++
          }
          if(this.framey > 2){
            this.framey = 0;
          }
          this.frameTimer = 0;
        }else {
          this.frameTimer += deltaTime;
        }
        
        this.frames++;
        if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right) || this.currentSprite === this.sprites.stand.left) {
          this.frames = 0;
        }else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right) || this.currentSprite === this.sprites.run.left) {
          // this.frames = 0;
        }
      }
      
      this.currentState.handleInput(input, keys);

      this.draw(c,deltaTime);

      // this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      // console.log(this.position.y)
      // console.log(this.jumpCounter)
      if(this.shouldJump){
        this.jumpCounter++;
        if(this.jumpCounter < 25){
          //go up
          this.position.y -= this.gravity;
        }else if(this.jumpCounter > 25 && this.jumpCounter < 30){
          this.position.y +=0;
        }else if(this.jumpCounter < 61){
          //come down
          this.position.y += this.gravity;
        }

        //end cycle
        if(this.jumpCounter >= 60){
          this.shouldJump = false;
          this.position.y = 330;
        }
      }

      // if (this.position.y  <= 57) {
      //   this.velocity.y = this.velocity.y + this.gravity;

      //   // } else {
      //   //   this.velocity.y = 0;
      // }else {
      //   this.velocity.y = 0
      // }
    }

    setState(state, keys){
      this.currentState = this.states[state];
      this.currentState.enter(keys);
    }
  }