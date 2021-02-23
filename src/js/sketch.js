let bg;
let ball;
let players = [];
let bgSound;
let kickSound;

function preload() {
  soundFormats('wav');
  bgSound = loadSound('/src/assets/sounds/musicloop');
  kickSound = loadSound('/src/assets/sounds/kick');
}

function setup() {
  bg = loadImage("/src/assets/sprites/board.png");
  players.push(
    new Paddle(
      PaddleFactory.coords(0, BOARD.height / 2 - PADDLE.height / 2),
      PaddleFactory.controllSettings(87, 83)
    ),
    new Paddle(
      PaddleFactory.coords(
        BOARD.width - PADDLE.width,
        BOARD.height / 2 - PADDLE.height / 2
      ),
      PaddleFactory.controllSettings(38, 40)
    )
  );
  ball = new Ball(
    BallFactory.coords(
      BOARD.width / 2 - BALL.side / 2,
      BOARD.height / 2 - BALL.side / 2
    ),
    kickSound
  );
  
  bgSound.loop();
  createCanvas(BOARD.width, BOARD.height);
}

function draw() {
  background(bg);
  ball.draw();
  players.forEach((player) => {
    player.draw();
    if (collition(ball, player)) ball.changeXAxis();
  });
}

