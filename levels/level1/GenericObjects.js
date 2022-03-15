export default class GenericObject {
    constructor({ x, y, image }) {
      this.position = {
        x,
        y,
      };
      this.image = image;
      this.width = image.width;
      this.height = 20;
    }

    draw(c) {
      // c.fillStyle = "blue";
      // c.fillRect(this.position.x, this.position.y, this.width, this.height);
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }