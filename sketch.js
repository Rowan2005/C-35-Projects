var canvas;

var gameState = 0;
var playerCount;
var database;
var form, player, game;

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}
