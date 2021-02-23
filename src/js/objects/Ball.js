class Ball {
  constructor(coords) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Dimensiones
    this.width = ballConstants.side;
    this.height = ballConstants.side;
    //Imagen
    this.img = loadImage("/src/assets/sprites/ball.png");
    //Velocidades
    this.speedX = 5 * this.multiplierDirection();
    this.speedY = 5 * this.multiplierDirection();
  }

  multiplierDirection() {
    return Math.round(Math.random()) ? 1 : -1;
  }

  // ============
  changeXAxis(){
    console.log("Switch")
    this.speedX *= -1;
  }
  // ============

  move() {
    if (this.x <= 0 || this.x >= board.width - this.width) {
      this.speedX *= -1;
    }
    if (this.y <= 0 || this.y >= board.height - this.height) {
      this.speedY *= -1;
    }
    this.x += this.speedX;
    this.y += this.speedY;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
  }
}

const BallFactory = {
  coords: (x, y) => {
    return {
      x,
      y,
    };
  },
};

