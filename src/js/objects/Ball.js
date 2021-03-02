class Ball {
  constructor(coords, players, kickSound) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Dimensiones
    this.width = BALL.side;
    this.height = BALL.side;
    //Imagen
    this.img = loadImage("/src/assets/sprites/ball.png");
    //Velocidades
    this.speedX = 5 * this.multiplierDirection();
    this.speedY = 5 * this.multiplierDirection();
    //Hitbox
    this.hb = new Hitbox(
      HitboxFactory.coords(this.x + 34, this.y + 34),
      HitboxFactory.CircleDims(BALL.hitboxSide)
    );
    //Players
    this.players = players;
    //Sonido
    this.kickSound = kickSound;

    this.bounce = true;
  }

  multiplierDirection() {
    return Math.round(Math.random()) ? 1 : -1;
  }

  hitPlayer() {
    players.forEach((player) => {
      if (player.hb.squareWasHitCircle(ball.hb) && this.bounce) {
        this.speedX *= -1;
        this.bounce = false;
        kickSound.play();
      }
    });
  }

  move() {
    if (
      this.hb.x - this.hb.diameter / 2 <= 0 ||
      this.hb.x >= BOARD.width - this.hb.diameter / 2
    )
      this.speedX *= -1;
    if (
      this.hb.y - this.hb.diameter / 2 <= 0 ||
      this.hb.y >= BOARD.height - this.hb.diameter / 2
    )
      this.speedY *= -1;
    if (this.x < BOARD.width / 2 + 10 && this.x > BOARD.width / 2 - 10)
      this.bounce = true;
    this.x += this.speedX;
    this.hb.x += this.speedX;
    this.y += this.speedY;
    this.hb.y += this.speedY;
  }

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.hitPlayer();
    this.move();
    //this.hb.draw();
  }
}

const BallFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
