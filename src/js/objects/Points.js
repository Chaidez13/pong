class Points {
  constructor(coords) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;

    //Player Points
    this.p1 = 0;
    this.p2 = 0;
  }

  draw(){
    fill('#FFFFFF')
    textSize(35)
    textAlign(CENTER)
    text(`${this.p1} - ${this.p2}`, this.x, this.y)
  }
}

const PointsFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
