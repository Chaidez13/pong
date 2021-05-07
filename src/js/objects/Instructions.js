class Instructions {
  constructor(coords) {
    //Coordenadas
    this.x = coords.x;
    this.y = coords.y;
    //Fuente
    this.gameState = 0;
  }

  draw() {
    push();
    textSize(25);
    text(this.textByState(this.gameState), this.x, this.y);
    pop();
  }

  textByState(state) {
    switch (state) {
      case 0:
        return "                        (W/S) Player 1 - Player 2 (Arriba/Abajo)";
      case 1:
        return "Pausa (Enter)";
      case 2:
        return "Continuar (Enter)";
      default:
        return "Easter Egg (?)";
    }
  }

  changeGameState() {
      if (this.gameState === 1) this.gameState = 2;
      else if (this.gameState === 2) this.gameState = 1;
  }
}

const InstructionsFactory = {
  coords: (x, y) => {
    return { x, y };
  },
};
