class Form{
    constructor(){
       this.input=createInput('Name');
       this.button=createButton('Join');
       this.greeting=createElement('h2');
       this.reset=createButton('reset');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display(){
       var title=createElement('h1'); 
       title.html("Car Racing Game");
       title.position(displayWidth/2-100,10);

      
      this.input.position(displayWidth/2-30,displayHeight/2-50);

     
       this.button.position(displayWidth/2,displayHeight/2);
       this.reset.position(displayWidth-100,20);
      this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();

           playerCount=playerCount+1;
           player.updateCount(playerCount);
           player.index=playerCount;
           player.name =this.input.value();
           player.updateDetails();

        
           this.greeting.html("Welcome "+player.name);
           this.greeting.position(displayWidth/2-30,displayHeight/2-50);
       });
       this.reset.mousePressed(()=>{
         player.updateCount(0);
         game.updateState(0);
         db.ref('players').remove();
       });
       
        }
     displayRank(){
         background(bg);
        var title=createElement('h1'); 
        title.html("Car Racing Game");
        title.position(displayWidth/2-100,10);
        var message=createElement('h2');
        message.html("Congratulations "+player.name+"! You Got Rank "+player.rank);
        message.position(displayWidth/2-100,400);

     }
    
}