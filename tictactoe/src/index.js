const View = require('./ttt-view.js')// require appropriate file
const Game = require('/ttt_node/game.js') // require appropriate file

document.addEventListener("DOMContentLoaded", () => {
    let game= new Game();
    let figure= document.querySelector(".ttt");
    let view= new View(game, figure);
    
  // Your code here
});

