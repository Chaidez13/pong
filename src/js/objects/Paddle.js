class Paddle {
  constructor(coords, controllSettings, player) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Dimensiones
    this.width = PADDLE.width;
    this.height = PADDLE.height;
    //Imagen
    this.img = loadImage("/src/assets/sprites/paddle.png");
    //Velocidades
    this.speed = 5;
    //Controles
    this.controllSettings = controllSettings;
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 9, this.y + 9),
      HitboxFactory.squareDims(PADDLE.hitboxWidth, PADDLE.hitboxHeight)
    );
    //Player to track the points
    this.player = player;

    //Hitbox Score
    this.pointsHB = new Hitbox(
      HitboxFactory.coords(
        this.player == PLAYERS_ID.player1
          ? BOARD.width + BALL.side / 2
          : -(BALL.side / 2),
        0
      ),
      HitboxFactory.squareDims(10, BOARD.height)
    );

    this.hasMove = false;
  }

  moveUp() {
    if (this.hb.y >= 0) {
      this.y -= this.speed;
      this.hb.y -= this.speed;
    }
  }

  moveDown() {
    if (this.hb.y <= BOARD.height - this.hb.height) {
      this.y += this.speed;
      this.hb.y += this.speed;
    }
  }

  move() {
    this.controllSettings.forEach((controll) => {
      if (keyIsDown(controll.key)) {
        this.hasMove = true;
        this[controll.name]();
      }
    });
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.move();
    //this.hb.draw();
  }
}

const PaddleFactory = {
  coords: (x, y) => {
    return { x, y };
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
