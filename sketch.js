var db;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2,car3,car4;
var cars;
var car1Img,car2Img,car3Img,car4Img;
var groundImg;
var trackImg;
var bg;


function preload(){
    car1Img=loadImage("images/car1.png");
    car2Img=loadImage("images/car2.png");
    car3Img=loadImage("images/car3.png");
    car4Img=loadImage("images/car4.png");
    trackImg=loadImage("images/track.jpg");
    groundImg=loadImage("images/ground.png");
    bg=loadImage("images/bg.jpeg");
}

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);
    db =firebase.database();
    game=new Game();
    game.getState();
    game.start();

}


function draw(){
 if (playerCount==4){
     game.updateState(1);
 }
 if (gameState==1) {
     clear();
     game.play();
 } 
 if(gameState==2){
     game.end();
 }
}

