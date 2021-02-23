let bg;
let ball;
let players = [];

function setup() {
  bg = loadImage("/src/assets/sprites/board.png");
  ball = new Ball(
    BallFactory.coords(
      board.width / 2 - ballConstants.side / 2,
      board.height / 2 - ballConstants.side / 2
    )
  );
  players.push(
    new Paddle(
      PaddleFactory.coords(0, board.height / 2 - paddle.height / 2),
      PaddleFactory.controllSettings(87, 83)
    ),
    new Paddle(
      PaddleFactory.coords(
        board.width - paddle.width,
        board.height / 2 - paddle.height / 2
      ),
      PaddleFactory.controllSettings(38, 40)
    )
  );
  createCanvas(board.width, board.height);
}

function draw() {
  background(bg);
  ball.draw();
  players.forEach((player) => {
    player.draw();
    // ==============
    //console.log(`${ball.x}, ${ball.y} = ${player.x}, ${player.y}`)
    if(player.x+paddle.width > ball.x && player.x < ball.x+ballConstants.width && player.y > ball.y+ballConstants.height && player.y+paddle.height < ball.y){
      console.log('This Condition Happen')
      ball.changeXAxis()
    }
    // ==============
  });
}
