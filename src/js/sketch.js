let bg;
//Objetos
let ball;
let players = [];
let points;
//Sonidos
let bgSound;
let kickSound;
let pointSound;

function preload() {
  soundFormats("wav");
  bgSound = loadSound("/src/assets/sounds/musicloop");
  kickSound = loadSound("/src/assets/sounds/kick");
  pointSound = loadSound("/src/assets/sounds/point");
}

function setup() {
  bg = loadImage("/src/assets/sprites/board.png");
  //Inicialización de los objetos
  players.push(
    new Paddle(
      PaddleFactory.coords(0, BOARD.height / 2 - PADDLE.height / 2),
      PaddleFactory.controllSettings(87, 83),
      PLAYERS.player1
    ),
    new Paddle(
      PaddleFactory.coords(
        BOARD.width - PADDLE.width,
        BOARD.height / 2 - PADDLE.height / 2
      ),
      PaddleFactory.controllSettings(38, 40),
      PLAYERS.player2
    )
  );
  ball = new Ball(
    BallFactory.coords(
      BOARD.width / 2 - BALL.side / 2,
      BOARD.height / 2 - BALL.side / 2
    ),
    players,
    kickSound
  );
  points = new Points(PointsFactory.coords(
    BOARD.width/2,
    50,
  ))

  bgSound.loop();
  createCanvas(BOARD.width, BOARD.height);
}

function draw() {
  background(bg);
  ball.draw();
  points.draw();
  players.forEach((player) => player.draw());
}
