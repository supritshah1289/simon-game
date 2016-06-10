//lightUp function takes number input - its an id of tile
var litArray = []
var level = 3;

function callPattern(){
  for(i=0; i<=level; i++){
    generateRandomNumber();
  }
}

//takes number as an input and lights up that tile based on id
function lightUp(){
  for(i=0; i<litArray.length; i++){
    var id = "#"+litArray[i];
    $(id).fadeTo("slow",0.2).fadeTo("slow",1);
    $(id).addClass('lit');
    // litArray.push(id);
    console.log(litArray);
  }
}

function userAnswer(){
    for(let i=0; i<litArray.length; i++){
      var shifterNumber = litArray[i];
      var tileId = $(".square").attr('id')
      $("#"+litArray[i]).on('click',function(){
        console.log(this);
        litArray.unshift();
        $(this).off('click');
        console.log(litArray);
    })
  }
}

//function inserts random number into litArray one by one
function generateRandomNumber(){
  litArray.push(Math.ceil(Math.random()*4));
}

callPattern();
lightUp();
userAnswer();
console.log(litArray);
// lightUp(4);
// lightUp(1);
// lightUp(3);
// userAnswer();




/*
Rough draft
1. function to flash colors in a pattern
    -variable of type array to store the above pattern
2. flashing color function
3. game start object
4. reset game
5. start game on play button function
6. UserClick on colors
  - storing those clicks and comparing #1
7. removing all events from all elements after each play

*/
