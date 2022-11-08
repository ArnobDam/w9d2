// const Board = require("/ttt_node/board.js");

class View {
  constructor(game, el) {
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const grid = document.createElement("ul");
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        grid.appendChild(li);
      }
    }
    this.el.appendChild(grid);
  }

  bindEvents() { }

  handleClick(e) { }

  makeMove(square) { }

}

module.exports = View;
