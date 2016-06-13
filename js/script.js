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
    for (let i = 0; i <= levelVal; i++) {
        generateRandomNumber();
    }
}


//takes number as an input and lights up that tile based on id
function lightUp(arr) {
    gameOver = true;
    for (let i = 0; i < arr.length; i++) {
        var id = "#" + litArray[i];
        $(id).animate({
            opacity: .3
        },i* 600).animate({
            opacity: 1
        }, 100);
    }
}

function userClick() {
    $(".square").click(function() {
        var targetElement = litArray.shift();
        var squareId = $(this).attr('id');
        $(this).animate({
            opacity: .2
        }, 500).animate({
            opacity: 1
        }, 100);
        if (Number(squareId) === targetElement) {
            if (litArray.length <= 0) {
                level++;
                $('h2').text("Level: " + level);

                callPattern(level);
                setTimeout(lightUp(litArray),800);
                console.log(litArray);
            }
        } else {
            gameOver = false;
            console.log("You clicked on wrong tile");
            $('h2').css({
              'color' : "#ff0066",
              'font-family': "Helvetica"
            });
            //displaying game over message using animate.css lib
            $('h2').text("Game Over. Click on Play button to start new game").addClass('animated infinite bounceOut');
        }
    })

}

function reset() {
    level = 1;
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
    $('h2').text("Level: 1");
    $('h2').removeClass('animated infinite bounceOut');
    console.log(litArray);
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
