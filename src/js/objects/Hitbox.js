class Hitbox {
  constructor(coords, dims) {
    this.x = coords.x;
    this.y = coords.y;
    //SquareHitbox
    this.width = dims.width;
    this.height = dims.height;
    //CircleHitbox
    this.diameter = dims.diameter;
  }

  //HitBoxSquare
  squareWasHitSquare(hbs) {
    return (
      hbs.x < this.x + this.width &&
      hbs.x + hbs.width > this.x &&
      hbs.y < this.y + this.height &&
      hbs.y + hbs.height > this.y
    );
  }
  //HitBoxCircle
  squareWasHitCircle(hbc) {
    var testX = hbc.x,
      testY = hbc.y;

    if (hbc.x < this.x) testX = this.x;
    else if (hbc.x > this.x + this.width) testX = this.x + this.width;
    if (hbc.y < this.y) testY = this.y;
    else if (hbc.y > this.y + this.height) testY = this.y + this.height;

    var distX = hbc.x - testX;
    var distY = hbc.y - testY;
    var distance = Math.sqrt(distX * distX + distY * distY);

    //testY es donde colisiona la bola
    if (distance <= hbc.diameter / 2) {
      var hitPlace = this.y + this.height - testY;
      if (hitPlace < 22) return 1;
      if (hitPlace < 44) return 2;
      if (hitPlace < 66) return 3;
      if (hitPlace < 88) return 2;
      return 1;
    }
    return 0;
  }

  draw() {
    if (!this.diameter) {
      rect(this.x, this.y, this.width, this.height);
    } else {
      ellipse(this.x, this.y, this.diameter);
    }
  }
}

const HitboxFactory = {
  coords: (x, y) => {
    return { x, y };
  },
  SquareDims: (width, height) => {
    return { width, height };
  },
  CircleDims: (diameter) => {
    return { diameter };
  },
};
