var canva;
var gameState;
var contestantCount;
var database;
var quiz;
var question;
var contestant;
gameState=0

function setup(){
  
  canvas = createCanvas(850,400);
database=firebase.database()
quiz = new Quiz();
quiz.getState();
quiz.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    quiz.update(1);
  }
  
}
  

