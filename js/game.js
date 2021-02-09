class Game{
    constructor(){

    }
    getState(){
        db.ref('gameState').on("value",function(data){
          gameState = data.val();
        })
    }
    updateState(state){
        db.ref('/').update({
            'gameState':state
        });

    }
    start(){
        if(gameState==0){
           form=new Form();
           player=new Player();
           form.display();
           player.getCount();
        }
        car1=createSprite(100,200);
        car1.addImage(car1Img);
        car2=createSprite(300,200);
        car2.addImage(car2Img);
        car3=createSprite(500,200);
        car3.addImage(car3Img);
        car4=createSprite(700,200);
        car4.addImage(car4Img);
        cars=[car1,car2,car3,car4];

    }
    play(){
     form.hide();
     Player.getallPlayers();
     player.getCarsAtEnd();
     if (allPlayers!=undefined){
         background(groundImg);
         image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5);
         var index=0;
         var x =175;
         var y;
         for (var plr in allPlayers){
             index+=1;
             x+=220;
             y=displayHeight-allPlayers[plr].distance;
             cars[index-1].x=x;
             cars[index-1].y=y;

            if (index==player.index){
                strokeWeight(5);
                stroke("red");
                fill("yellow");
                ellipse(x,y,80,80);
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;

            }              
                         
        }
     }
     if (keyIsDown(UP_ARROW)&&player.index!=null){
         player.distance+=50;
         player.updateDetails();
     }
     if(player.distance>4200){
         gameState=2;
         player.rank+=1
         player.updateCarsAtEnd(player.rank);
     }
     drawSprites();
    }

    end(){
     form.displayRank();
    }
}