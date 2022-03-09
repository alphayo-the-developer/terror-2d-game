
export default function init(image,c) {
    var gravity = 0.8;
    console.log(44)
    class Player {
      constructor() {
        this.image = image.spriteStandRight;
        this.speed = 10;
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
  
      draw() {
        //  c.fillStyle = "red";
        //  c.fillRect(this.position.x, this.position.y, this.width, this.height);
        console.log(this.frames)
        c.drawImage(
          this.currentSprite,
          this.currentCropWidth * this.frames,
          0,
          this.currentCropWidth,
          400,
          this.position.x,
          this.position.y,
          this.width,
          this.height
        );
      }
  
      update() {
        this.frames++;
        if (this.frames > 59 && (this.currentSprite === this.sprites.stand.right) || this.currentSprite === this.sprites.stand.left) {
          this.frames = 0;
        }else if(this.frames > 29 && (this.currentSprite === this.sprites.run.right) || this.currentSprite === this.sprites.run.left) {
          // this.frames = 0;
        }
  

        this.draw();

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

  
        if (this.position.y + this.height + this.velocity.y <= 576) {
          this.velocity.y += gravity;
          // console.log(this.frames)

          // } else {
          //   this.velocity.y = 0;
        }
      }
    }
  
    class Platform {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;
        this.width = image.width;
        this.height = 20;
      }
  
      draw() {
        // c.fillStyle = "blue";
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }
  
    class GenericObject {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;
        this.width = image.width;
        this.height = 20;
      }
  
      draw() {
        // c.fillStyle = "blue";
        // c.fillRect(this.position.x, this.position.y, this.width, this.height);
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }
  
   var genericObjects = [
      new GenericObject({ x: -1, y: -1, image: image.background }),
      new GenericObject({ x: -1, y: -1, image: image.hills }),
    ];
  
    var player = new Player();
    var platforms = [
      new Platform({ x: -1, y: 470, image: image.platfom }),
      new Platform({ x: image.platfom.width - 2, y: 470, image: image.platfom }),
      new Platform({ x: image.platfom.width * 2 + 100, y: 470, image: image.platfom }),
      new Platform({ x: image.platfom.width * 3 + 100, y: 470, image: image.platfom }),
      new Platform({ x: image.platfom.width * 4 + 100, y: 470, image: image.platfom }),
      new Platform({
        x: image.platfom.width * 4 + 100,
        y: 470,
        image: image.platfomSmallTall,
      }),
    ];
    
    return [player,platforms,genericObjects]
    // const keys = {
    //   right: {
    //     pressed: false,
    //   },
    //   left: {
    //     pressed: false,
    //   },
    // };
  
    
  }