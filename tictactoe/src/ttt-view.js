// const Board = require("/ttt_node/board.js");

class View {
  constructor(game, el) {
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const grid = document.createElement("ul");
    grid.setAttribute("class", "grid")
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.setAttribute("class", `square${i}${j}`)
        grid.appendChild(li);
      }
    }
    this.el.appendChild(grid);
  }

  bindEvents() {
    
    // addEventListener('click', function (e) {
    //   // this.document.querySelector(".grid");
    //   this.handleClick(e);
    // });
  }

  handleClick(e) {
    // let xPos = e.screenX;
    // let yPos = e.screenY;
    //pos = e.pos
    //check if one of the squares include the pos
    //if the pos falls within one of the li elements
    //call makeMove(square)
    //
  }

  makeMove(square) {

    //if li is empty?
    //mark it with x or o
    //else
    //do nothing

  }

}

module.exports = View;

