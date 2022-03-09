var keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
}


export var keydown =  document.addEventListener("keydown", ({ key }) => {
    switch (key) {
      case "a":
      case "ArrowLeft":
        keys.left.pressed = true;
        lastKey = 'left'
        
        break;
      case "d":
      case "ArrowRight":
        keys.right.pressed = true;
        lastKey = 'right';
  
        break;
      case "w":
      case "ArrowUp":
        player.velocity.y -= 5;
        break;
      default:
        break;
    }
    return keys
  });
  
export var keyup =  addEventListener("keyup", ({ key }) => {
    switch (key) {
      case "a":
      case "ArrowLeft":
        keys.left.pressed = false;
        break;
      case "d":
      case "ArrowRight":
        keys.right.pressed = false;
      
        break;
      case "w":
      case "ArrowUp":
        // player.velocity.y -= 20;
        break;
      default:
        break;
    }
  });