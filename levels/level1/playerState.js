export const states = {
    IDLE: 0,
    BAT:1,
    DEATH: 9,
    JUMP: 3,
    BELLY_SLIDING: 4,
    CROUCH: 2,
    HURT: 6,
    DEATH: 7,
  };
  
  class State {
    constructor(state) {
      this.state = state;
    }
  }
  
  export class Idle extends State {
    constructor(player, platforms, genericObjects) {
      super("IDLE");
      this.player = player;
      this.platforms = platforms;
      this.genericObjects = genericObjects;
    }
    enter(keys) {
    
      this.player.currentSprite = this.player.sprites.stand.right;
      this.player.currentSpriteState = this.player.sprites.stand;

      if (keys.right.pressed && this.player.position.x < 400) {
        this.player.velocity.x = this.player.speed;
      }else {
        this.player.velocity.x = 0;
      }

      // idle change sprite and move platforms and genericobjects
      if (keys.right.pressed) {
        // animate.scrolOffset += this.player.speed;
        this.player.currentSprite = this.player.sprites.run.right;
        this.player.currentSpriteState = this.player.sprites.run;
        this.platforms.forEach((platforms) => {
          platforms.position.x -= this.player.speed;
        });
        this.genericObjects.forEach((genericObject) => {
          genericObject.position.x -= this.player.speed * 0.66;
        });
        // reload run
        if (keys.reload.pressed) {
        
          this.player.currentSprite = this.player.sprites.runreload.right;
          this.player.currentSpriteState = this.player.sprites.runreload;
          
        }

        if (keys.runshoot.pressed || keys.idleshoot.pressed) {
        
          this.player.currentSprite = this.player.sprites.runshoot.right;
          this.player.currentSpriteState = this.player.sprites.runshoot;
          
        }
        if (keys.runshootup.pressed) {
        
          this.player.currentSprite = this.player.sprites.runshootup.right;
          this.player.currentSpriteState = this.player.sprites.runshootup;
          
        }
        if (keys.runshootdown.pressed) {
        
          this.player.currentSprite = this.player.sprites.runshootdown.right;
          this.player.currentSpriteState = this.player.sprites.runshootdown;
          
        }
      }

      //reload idle
      if (keys.reload.pressed) {
        
        this.player.currentSprite = this.player.sprites.reload.right;
        this.player.currentSpriteState = this.player.sprites.reload;
        
      }

      // idle shoot
      // if (keys.idleshoot.pressed) {
        
      //   this.player.currentSprite = this.player.sprites.idleshoot.right;
      //   this.player.currentSpriteState = this.player.sprites.idleshoot;
        
      // }

      // idle shoot up
      if (keys.idleshootup.pressed) {
        
        this.player.currentSprite = this.player.sprites.idleshootup.right;
        this.player.currentSpriteState = this.player.sprites.idleshootup;
        
      }

      // idle shoot down
      if (keys.idleshootdown.pressed) {
        
        this.player.currentSprite = this.player.sprites.idleshootdown.right;
        this.player.currentSpriteState = this.player.sprites.idleshootdown;
        
      }

      // idle shoot vertical
      if (keys.idleshootvertical.pressed) {
        
        this.player.currentSprite = this.player.sprites.idleshootvertical.right;
        this.player.currentSpriteState = this.player.sprites.idleshootvertical;
        
      }

        //idle jump
        if(keys.jump.pressed){
          // this.player.velocity.y -= 1;
          this.player.currentSprite = this.player.sprites.jump.right;
          this.player.currentSpriteState = this.player.sprites.jump;
          this.player.shouldJump = true;
          this.player.jumpCounter = 0;
        
      }
      
      
    }
    handleInput(input, pressed) {

      if (input === "gun") {
        this.player.setState(states.IDLE, pressed);
        
      // } else if (input === "right"){
      //   this.player.setState(states.IDLE, pressed);
      // }
      }else if (input === "bat"){
        this.player.setState(states.BAT, pressed);
      }else if(input === "crouch"){
        this.player.setState(states.CROUCH, pressed);

      }
  }
  }

  export class IdleBat extends State {
    constructor(player, platforms, genericObjects) {
      super("IDLE");
      this.player = player;
      this.platforms = platforms;
      this.genericObjects = genericObjects;
    }
    enter(keys) {
    
      this.player.currentSprite = this.player.sprites.standbat.right;
      this.player.currentSpriteState = this.player.sprites.standbat;

      if (keys.right.pressed && this.player.position.x < 400) {
        this.player.velocity.x = this.player.speed;
      }else {
        this.player.velocity.x = 0;
      }
      //idle bat attack
      if (keys.melle_attack.pressed) {
        
        this.player.currentSprite = this.player.sprites.idlebatattack.right;
        this.player.currentSpriteState = this.player.sprites.idlebatattack;
        
      }

      // bat run
      if (keys.right.pressed) {
        // animate.scrolOffset += this.player.speed;
        this.player.currentSprite = this.player.sprites.runbat.right;
        this.player.currentSpriteState = this.player.sprites.runbat;
        this.platforms.forEach((platforms) => {
          platforms.position.x -= this.player.speed;
        });
        this.genericObjects.forEach((genericObject) => {
          genericObject.position.x -= this.player.speed * 0.66;
        });

        // melee run bat attack
        if (keys.melle_attack.pressed) {
        
          this.player.currentSprite = this.player.sprites.runbatattack.right;
          this.player.currentSpriteState = this.player.sprites.runbatattack;
          
        }
      }

      
    }
    handleInput(input, pressed) {
      if (input === "gun") {
        this.player.setState(states.IDLE, pressed);
      } else if (input === "bat"){
        this.player.setState(states.BAT, pressed);
      }else if(input === "crouch"){
        this.player.setState(states.CROUCH, pressed);

      }
      }
  }


  export class Crouch extends State {
    constructor(player, platforms, genericObjects) {
      super("CROUCH");
      this.player = player;
      this.platforms = platforms;
      this.genericObjects = genericObjects;
    }
    enter(keys) {
      // crouch transaction
      if (keys.crouch_transition.pressed == true) {
        if(this.player.currentSprite === this.player.sprites.crouchidle.right){
          console.log(this.state)
        }else {
          this.player.currentSprite = this.player.sprites.crouchstart.right;
          this.player.currentSpriteState = this.player.sprites.crouchstart;
        }
        
      }else if(keys.crouch_transition.pressed == false) {
        this.player.currentSprite = this.player.sprites.crouchidle.right;
        this.player.currentSpriteState = this.player.sprites.crouchidle;
      }
      
      
      if (keys.right.pressed && this.player.position.x < 400) {
        this.player.velocity.x = this.player.speed;
      }else {
        this.player.velocity.x = 0;
      }

     

      //reload idle
      if (keys.reload.pressed) {
        this.player.currentSprite = this.player.sprites.crouchreload.right;
        this.player.currentSpriteState = this.player.sprites.crouchreload;
      }

      
    }
    handleInput(input, pressed) {

      if (input === "gun") {
        this.player.setState(states.IDLE, pressed);
        
      // } else if (input === "right"){
      //   this.player.setState(states.IDLE, pressed);
      // }
      }else if (input === "bat"){
        this.player.setState(states.BAT, pressed);
      }else if(input === "crouch"){
        this.player.setState(states.CROUCH, pressed);
      }
  
  }
  }

  