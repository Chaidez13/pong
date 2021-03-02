class Points {
  constructor(coords) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
  }
}

const PointsFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
