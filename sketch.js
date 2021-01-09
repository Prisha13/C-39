var database;
var gameState = 0;
var playerCount;
var allPlayers;
var form, game, player;
var car1, car2, car3, car4;
var cars;
var car1_img, car2_img, car3_img, car4_img;
var track_img;
var finishedPlayers = 0;
var reachedFinishedPoint;

function preload(){
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  track_img = loadImage("images/track.jpg");
}
function setup(){
    createCanvas(displayWidth - 10, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
  if(playerCount === 4 && finishedPlayers === 0){
     game.update(1);
  }
  if(gameState === 1){
     clear(); 
     game.play();
  }
  if(gameState === 2){
    displayRank();
  }
}