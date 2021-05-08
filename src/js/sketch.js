let bg;
let cnv;
//Objetos
let ball;
let players = [];
let points;
let inst;
//Sonidos
let bgSound;
let kickSound;
let pointSound;
let wallSound;

let kenvectorFont;

function preload() {
  soundFormats("wav");
  bgSound = loadSound("src/assets/sounds/background.mp3");
  kickSound = loadSound("src/assets/sounds/kick");
  pointSound = loadSound("src/assets/sounds/point");
  wallSound = loadSound("src/assets/sounds/wall");
  kenvectorFont = loadFont("src/assets/fonts/kenvector_future_thin.ttf");
}

function setup() {
  bg = loadImage("src/assets/sprites/background.png");
  //Inicialización de los objetos
  inst = new Instructions(
    InstructionsFactory.coords(BOARD.width / 2 + 2, BOARD.height - 50)
  );
  players.push(
    new Paddle(
      PaddleFactory.coords(0, BOARD.height / 2 - PADDLE.height / 2),
      PaddleFactory.controllSettings(87, 83),
      PLAYERS_ID.player1,
      inst,
    ),
    new Paddle(
      PaddleFactory.coords(
        BOARD.width - PADDLE.width,
        BOARD.height / 2 - PADDLE.height / 2
      ),
      PaddleFactory.controllSettings(38, 40),
      PLAYERS_ID.player2,
      inst,
    )
  );
  points = new Points(
    PointsFactory.coords(BOARD.width / 2 + 2, 50),
    kenvectorFont
  );
  ball = new Ball(
    BallFactory.coords(
      BOARD.width / 2 - BALL.side / 2,
      BOARD.height / 2 - BALL.side / 2
    ),
    players,
    points,
    kickSound,
    pointSound,
    wallSound,
    inst
  );

  bgSound.setVolume(0.3)
  bgSound.loop();
  cnv = createCanvas(BOARD.width, BOARD.height);
  centerCanvas();
}

function draw() {
  background(bg);
  ball.draw();
  points.draw();
  inst.draw();
  players.forEach((player) => player.draw());
}

function keyPressed({ key }) {
  if (key === "Enter") inst.changeGameState();
}

function windowResized() {
  centerCanvas();
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}
