class Player{
    constructor(){
      this.inde=null;
      this.name=null;
      this.distance=0;
      this.rank=0;
    }
    getCount(){
        db.ref('playerCount').on("value",function(data){
            playerCount = data.val();
        })
    }
    updateCount(count){
        db.ref('/').update({
            'playerCount':count
        });
    }
    updateDetails(){
         var pl = "players/player"+player.index
        db.ref(pl).set({
            'name':this.name,
            'distance':this.distance   
        });
    }
    static getallPlayers(){
     db.ref('players').on("value",function(data){
         allPlayers=data.val();
         
     })
    }

    getCarsAtEnd(){
      db.ref('carsAtEnd').on("value",(data)=>{
          this.rank=data.val();
      })  
    }

    updateCarsAtEnd(rank){
      db.ref('/').update({
          'carsAtEnd':rank
      })
    }
}