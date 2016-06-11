//lightUp function takes number input - its an id of tile
var litArray = []
var level = 1;
var gameOver = false;

function startGame() {
    disableClicks();
    callPattern(level);
    lightUp(litArray);
    userClick();
}

function callPattern(levelVal) {
    for (i = 0; i <= levelVal; i++) {
        generateRandomNumber();
    }
}

//takes number as an input and lights up that tile based on id
function lightUp(arr) {
    gameOver = true;
    for (i = 0; i < arr.length; i++) {
        var id = "#" + litArray[i];
        $(id).animate({
            opacity: .2
        }, i * 700).animate({
            opacity: 1
        }, 100);
        // $(id).fadeTo("slow",0.2).fadeTo("slow",1);
    }
}

function userClick() {
    $(".square").click(function() {
        var targetElement = litArray.shift();
        var squareId = $(this).attr('id');
        $(this).addClass('animated flash').removeClass('animated flash')
        // $(this).animate({
        //     opacity: .2
        // },600).animate({
        //     opacity: 1
        // }, 100);
        // console.log("squareId = ", squareId);
        // console.log("targetElement = ", targetElement);
        // console.log("typeOF squareId = ", typeof squareId);
        // console.log("typeof targetElement = ", typeof targetElement);
        if (Number(squareId) === targetElement) {
            // console.log("They are equal!. arr =", litArray);
            if (litArray.length <= 0) {
                level++;
                $('h2').text("Level: " + level);
                callPattern(level);
                setTimeout(lightUp(litArray),1500);

            }
        } else {
            gameOver = false;
            console.log("You clicked on wrong tile");
            $('h2').css({
              'color' : "#2BDFF5",
              'font-family': "Helvetica"
            });
            $('h2').text("Game Over");

            level = 0
            litArray = [];
        }
    })

}

function reset() {
    level = 0;
    $('h2').text("Level: " + level);
    $('.play').click(function() {
        if (gameOver === false) {
            startGame();
        }
    });

}

//function inserts random number into litArray one by one
function generateRandomNumber() {
    litArray.push(Math.ceil(Math.random() * 4));
}

function disableClicks() {
    $('.square').unbind();
}

$('.play').on('click', function() {
    startGame();
    $('h2').text("Level: 0");

})

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
