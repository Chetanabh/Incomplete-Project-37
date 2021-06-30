class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var contestantCountRef = database.ref('contestantCount');
    contestantCountRef.on("value",(data)=>{
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(){
    var contestantIndex = "contetants/contestant" + this.index;
    database.ref(contestantIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var contestantInfoRef = database.ref('contestants');
    contestantInfoRef.on("value",(data)=>{
      allContestants = data.val();
      console.log(allContestants);
    })
      for(var plr in allContestants){
       var correctAns = "2";
       if(correctAns === allContestants[plr].answer){
         fill("green");
         textSize(19);
         text(allContestants[plr] + " : " + allContestants[plr].answer,300,300);
       }else {
         fill("red");
         textSize(19);
         text(allContestants[plr] + " : " + allContestants[plr].answer,300,360);
       }

    
      }
  }
}
