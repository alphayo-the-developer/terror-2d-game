export default class InputHandler {
    constructor() {
        this.lastKey = "";
        this.keys = {
            right: {
              pressed: false,
            },
            left: {
              pressed: false,
            },
            bat: {
              pressed: false,
            },
          };

        window.addEventListener("keydown", ({ key }) => {
            switch (key) {
              case "a":
              case "ArrowLeft":
                this.keys.left.pressed = true;
                this.lastKey = "left";
                break;
              case "d":
              case "ArrowRight":
                this.keys.right.pressed = true;
                this.lastKey = "right";
                break;
              case "w":
              case "ArrowUp":
              this.keys.bat.pressed = true;
              this.lastKey = "bat";

              // player.velocity.y -= 0.11;
                break;
              default:
                break;
            }
          });
      
          window.addEventListener("keyup", ({ key }) => {
            switch (key) {
              case "a":
              case "ArrowLeft":
                this.keys.left.pressed = false;
                break;
              case "d":
              case "ArrowRight":
                this.keys.right.pressed = false;
              
                break;
              case "w":
              case "ArrowUp":
      
                // animate.obj[0].velocity.y += 0.11;
                break;
              default:
                break;
            }
          });
    }


}