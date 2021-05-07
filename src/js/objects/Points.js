class Points {
  constructor(coords, font) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Fuente
    this.font = font;
    //Player Points
    this.p1 = 0;
    this.p2 = 0;
  }

  draw() {
    fill("#ea00ff")
    stroke(0)
    textSize(40);
    textAlign(CENTER);
    textFont(this.font);
    text(`${this.p1} - ${this.p2}`, this.x, this.y);
  }

  updatePlayerPoints(playerID) {
    this[playerID]++;
  }
}

const PointsFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
