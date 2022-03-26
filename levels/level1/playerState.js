export const states = {
    IDLE: 0,
    BAT:1,
    DEATH: 2,
    JUMP: 3,
    BELLY_SLIDING: 4,
    CROUCH: 5,
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
      }
    }
    handleInput(input, pressed) {
      if (input === "left") {
        this.player.setState(states.IDLE, pressed);
      } else if (input === "right"){
        this.player.setState(states.IDLE, pressed);
      }else if (input === "bat"){
        this.player.setState(states.BAT, pressed);
    }}
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
      }
    }
    handleInput(input, pressed) {
      if (input === "left") {
        this.player.setState(states.IDLE, pressed);
      } else if (input === "right")
        this.player.setState(states.IDLE, pressed);
    }
  }