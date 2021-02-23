class Paddle {
  constructor(coords, controllSettings) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Dimensiones
    this.width = paddle.width;
    this.height = paddle.height;
    //Imagen
    this.img = loadImage("/src/assets/sprites/paddle.png");
    //Velocidades
    this.speed = 5;
    //Controles
    this.controllSettings = controllSettings;
  }

  moveUp() {
    if (this.y >= 0) this.y -= this.speed;
  }

  moveDown() {
    if (this.y <= board.height - this.height) this.y += this.speed;
  }

  move() {
    this.controllSettings.forEach(controll => {
      if (keyIsDown(controll.key)) {
        this[controll.name]();
      }
    });
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
  }
}

const PaddleFactory = {
  coords: (x, y) => {
    return {
      x,
      y,
    };
  },
  controllSettings: (moveUpKey, moveDownKey) => {
    return [
      {
        name: "moveUp",
        key: moveUpKey,
      },
      {
        name: "moveDown",
        key: moveDownKey,
      },
    ];
  },
};
