export const platfomCollision = function (platfom,player) {
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
}