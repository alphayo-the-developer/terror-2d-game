export const states = {
    STANDING_LEFT: 1,
    STANDING_RIGHT: 0,
    SITTING_LEFT: 2,
    SITTING_RIGHT: 3,
    RUNNING_LEFT: 4,
    RUNNING_RIGHT: 5,
  };
  
  class State {
    constructor(state) {
      this.state = state;
    }
  }
  
  export class standingLeft extends State {
    constructor(player, platforms, genericObjects) {
      super("STANDING LEFT");
      this.player = player;
      this.platforms = platforms;
      this.genericObjects = genericObjects;
    }
    enter(keys) {
      this.player.currentSprite = this.player.sprites.stand.left;
      console.log(this.player.position.x)
      if (keys.left.pressed && this.player.position.x > 100) {
        this.player.velocity.x = -this.player.speed;
      } else {
        this.player.velocity.x = 0;
      }

      if (keys.left.pressed) {
        // animate.scrolOffset -= player.speed;

        this.platforms.forEach((platforms) => {
          platforms.position.x += this.player.speed;
        });
        this.genericObjects.forEach((genericObject) => {
          genericObject.position.x += this.player.speed * 0.66;
        });
      }
    }
    handleInput(input, pressed) {

      if (input === "right") {
        this.player.setState(states.STANDING_RIGHT,pressed);
      } else if (input === "PRESS down"){
        this.player.setState(states.STANDING_LEFT, pressed);
        
      }


    }

  }
  
  export class standingRight extends State {
    constructor(player, platforms, genericObjects) {
      super("STANDING RIGHT");
      this.player = player;
      this.platforms = platforms;
      this.genericObjects = genericObjects;
    }
    enter(keys) {
      this.player.currentSprite = this.player.sprites.stand.right;

      if (keys.right.pressed && this.player.position.x < 400) {
        this.player.velocity.x = this.player.speed;
      }else {
        this.player.velocity.x = 0;
      }

      console.log(this.platforms)

      if (keys.right.pressed) {
        // animate.scrolOffset += this.player.speed;
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
        this.player.setState(states.STANDING_LEFT, pressed);
      } else if (input === "right")
        this.player.setState(states.STANDING_RIGHT, pressed);
    }
  }