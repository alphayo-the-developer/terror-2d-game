export default class InputHandler {
  constructor() {
    this.lastKey = "gun";
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
      gun: {
        pressed: false,
      },
      reload: {
        pressed: false,
      },
      melle_attack: {
        pressed: false,
      },
      crouch_transition: {
        pressed: false,
      },
      idleshoot: {
        pressed: false,
      },
      idleshootup: {
        pressed: false,
      },
      idleshootdown: {
        pressed: false,
      },
      idleshootvertical: {
        pressed: false,
      },
      runshoot: {
        pressed: false,
      },
      runshootup: {
        pressed: false,
      },
      runshootdown: {
        pressed: false,
      },
      jump: {
        pressed: false,
      },
    };

    window.addEventListener("keydown", ({ key }) => {
      switch (key) {
        case "a":
        case "ArrowLeft":
          this.keys.left.pressed = true;
          break;
        case "d":
        case "ArrowRight":
          this.keys.right.pressed = true;
          break;
        case "w":
        case "ArrowUp":
          // this.lastKey = "bat";

          break;
        case "d":
        case "ArrowDown":
          this.lastKey = "gun";

          break;
        case "c":
          if (this.lastKey !== "crouch") {
            // this.lastKey = "crouch";
            // this.keys.crouch_transition.pressed = true;
          }else{
            this.lastKey = "gun";
            this.keys.crouch_transition.pressed = true;
          }
          break;
        case "r":
          this.keys.reload.pressed = true;

          break;
        case "g":
          this.keys.melle_attack.pressed = true;
          this.keys.idleshoot.pressed = true;
          break;
        case "y":
          // this.keys.idleshootup.pressed = true;
          break;
        case "h":
          // this.keys.idleshootdown.pressed = true;
          break;
        case "n":
          // this.keys.idleshootvertical.pressed = true;
          break;
          case "u":
          this.keys.runshoot.pressed = true;
          break;
          case "j":
          // this.keys.runshootup.pressed = true;
          break;
          case "m":
          // this.keys.runshootdown.pressed = true;
          break;
          case "o":
          this.keys.jump.pressed = true;
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
          break;
        case "r":
          setTimeout(() => {
            this.keys.reload.pressed = false;
          }, 1000);
          break;
        case "g":
          setTimeout(() => {
            this.keys.melle_attack.pressed = false;
            this.keys.idleshoot.pressed = false;
          }, 400);
          break;
        case "c":
          setTimeout(() => {
            this.keys.crouch_transition.pressed = false;
          }, 1000);
          break;
        case "y":
          setTimeout(() => {
            this.keys.idleshootup.pressed = false;
          }, 1000);
          break;
        case "h":
          setTimeout(() => {
            this.keys.idleshootdown.pressed = false;
          }, 1000);
          break;
        case "n":
          setTimeout(() => {
            this.keys.idleshootvertical.pressed = false;
          }, 1000);
          break;
          case "u":
          setTimeout(() => {
            this.keys.runshoot.pressed = false;
          }, 1000);
          break;
          case "j":
          setTimeout(() => {
            this.keys.runshootup.pressed = false;
          }, 1000);
          break;
          case "m":
          setTimeout(() => {
            this.keys.runshootdown.pressed = false;
          }, 1000);
          break;
          case "o":
          //   setTimeout(() => {
          //     this.keys.jump.pressed = false;
          //   }, 7000);
            this.keys.jump.pressed = false
            break;
  
        default:
          break;
      }
    });
  }
}
