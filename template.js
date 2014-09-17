var CANVAS_WIDTH = 800;
var CANVAS_HEIGHT = 600;
var FPS = 30;

var canvas, stage, queue, context;
var gameState;
var startButton, instructionsButton, restartButton;
var titleScreen, instructionsScreen, button;
var gameTimer, gameLevelNumber;
var gameOver, score, scoreText;
var TITLE = 0, INSTRUCTIONS = 1, CREATE_GAME = 2, DISPLAYING_NUMBERS = 3, ACCEPTING_NUMBERS = 4, GAME_OVER = 5;
var mouseX, mouseY, mousePositionText;
var number1, number2, number3, number4, number5, number6, number7, number8, number9, number0, pressed0, pressed1, pressed2, pressed3, pressed4, pressed5, pressed6, pressed7, pressed8, pressed9;
var numberSequence = [];
var displayedNumer, currentSequenceLength;
var selectedNumber, selectedSpotInArray, totalCorrectInSequence;

var walk, blocks, blockArray, spriteX, spriteY;

var walkingDirection;

var gameOver;

blockArray = [];

function openCanvas() {
	
	var canvas = document.getElementById('game');
	canvas.width = CANVAS_WIDTH;
	canvas.height = CANVAS_HEIGHT;
	context = canvas.getContext("2d");
	stage = new createjs.Stage(canvas);
}

function drawTitleScreen() {
	titleScreen.x = 0;
	titleScreen.y = 0;

	var text = new createjs.Text("The Numbers", "50px Arial", "#253742"); 
	text.x = 270; 
	text.y = 100;
	text.textBaseline = "alphabetic";

	startButton.x = 500;
	startButton.y = 500;
    instructionsButton.x = 600;
    instructionsButton.y = 500;

	stage.addChild(titleScreen);
	stage.addChild(text);
	stage.addChild(startButton);
    stage.addChild(instructionsButton);
	
}

function drawInstructionsScreen() {
    stage.removeAllChildren();
	instructionsScreen.x = 0;
	instructionsScreen.y = 0;

    var text = new createjs.Text("Instructions", "50px Arial", "#EFC94C"); 
    text.x = 270; 
    text.y = 100;

    startButton.x = 600;
    startButton.y = 500;


	stage.addChild(instructionsScreen);
    stage.addChild(text);
    stage.addChild(startButton);
}

function drawGameScreen() {
    stage.removeAllChildren();
	gameScreen.x = 0;
	gameScreen.y = 0;

    number1.x = 190;
    number1.y = 380;

    pressed1.x = 190;
    pressed1.y = 380;

    number2.x = 275;
    number2.y = 380;

    pressed2.x = 275;
    pressed2.y = 380;

    number3.x = 360;
    number3.y = 380;

    pressed3.x = 360;
    pressed3.y = 380;

    number4.x = 445;
    number4.y = 380;

    pressed4.x = 445;
    pressed4.y = 380;

    number5.x = 530;
    number5.y = 380;

    pressed5.x = 530;
    pressed5.y = 380;

    number6.x = 190;
    number6.y = 465;

    pressed6.x = 190;
    pressed6.y = 465;

    number7.x = 275;
    number7.y = 465;

    pressed7.x = 275;
    pressed7.y = 465;

    number8.x = 360;
    number8.y = 465;

    pressed8.x = 360;
    pressed8.y = 465;

    number9.x = 445;
    number9.y = 465;

    pressed9.x = 445;
    pressed9.y = 465;

    number0.x = 530;
    number0.y = 465;

    pressed0.x = 530;
    pressed0.y = 465;
    stage.update();
    stage.addChild(gameScreen);

    stage.addChild(number0);
    number0.visible =false;

    stage.addChild(pressed0);
    pressed0.visible = false;

    stage.addChild(number1);
    number1.visible = false;

    stage.addChild(pressed1);
    pressed1.visible = false;

    stage.addChild(number2);
    number2.visible = false;

    stage.addChild(pressed2);
    pressed2.visible = false;

    stage.addChild(number3);
    number3.visible = false;

    stage.addChild(pressed3);
    pressed3.visible = false;

    stage.addChild(number4);
    number4.visible = false;

    stage.addChild(pressed4);
    pressed4.visible = false;

    stage.addChild(number5);
    number5.visible = false;

    stage.addChild(pressed5);
    pressed5.visible = false;

    stage.addChild(number6);
    number6.visible = false;

    stage.addChild(pressed6);
    pressed6.visible = false;

    stage.addChild(number7);
    number7.visible = false;

    stage.addChild(pressed7);
    pressed7.visible = false;

    stage.addChild(number8);
    number8.visible = false;

    stage.addChild(pressed8);
    pressed8.visible = false;

    stage.addChild(number9);
    number9.visible = false;

    stage.addChild(pressed9);
    pressed9.visible = false;
    
}

function drawGameOverScreen() {
    stage.removeAllChildren();
	gameOverScreen.x = 0;
	gameOverScreen.y = 0;

	var text = new createjs.Text("Game Over", "50px Arial", "#253742"); 
	text.x = 270; 
	text.y = 100;
	text.textBaseline = "alphabetic";

	var finalScoreText = new createjs.Text("Final Score: "+ getScore(), "30px Arial", "#253742"); 
	finalScoreText.x = 300; 
	finalScoreText.y = 200;
	finalScoreText.textBaseline = "alphabetic";

    restartButton.x = 500;
    restartButton.y = 500;


	stage.addChild(gameOverScreen);
	stage.addChild(text);
	stage.addChild(finalScoreText);
    stage.addChild(restartButton);
}

fileManifest = [
                {src:"titleScreen.jpg", id:"titleScreen"},
                {src:"instructionsScreen.jpg", id:"instructionsScreen"},
                {src:"startButton.jpg", id:"startButton"},
                {src:"instructionsButton.jpg", id:"instructionsButton"},
                {src:"restartButton.jpg", id:"restartButton"},
                {src:"gameScreen.jpg", id:"gameScreen"},
                {src:"gameOverScreen.jpg", id:'gameOverScreen'},
                {src:'Number1.jpg', id:'number1'},
                {src:'Number2.jpg', id:'number2'},
                {src:'Number3.jpg', id:'number3'},
                {src:'Number4.jpg', id:'number4'},
                {src:'Number5.jpg', id:'number5'},
                {src:'Number6.jpg', id:'number6'},
                {src:'Number7.jpg', id:'number7'},
                {src:'Number8.jpg', id:'number8'},
                {src:'Number9.jpg', id:'number9'},
                {src:'Number0.jpg', id:'number0'},
                {src:'Number0Pressed.jpg', id:'pressed0'},
                {src:'Number1Pressed.jpg', id:'pressed1'},
                {src:'Number2Pressed.jpg', id:'pressed2'},
                {src:'Number3Pressed.jpg', id:'pressed3'},
                {src:'Number4Pressed.jpg', id:'pressed4'},
                {src:'Number5Pressed.jpg', id:'pressed5'},
                {src:'Number6Pressed.jpg', id:'pressed6'},
                {src:'Number7Pressed.jpg', id:'pressed7'},
                {src:'Number8Pressed.jpg', id:'pressed8'},
                {src:'Number9Pressed.jpg', id:'pressed9'}



                
            ];

function loadFiles() {
    queue = new createjs.LoadQueue(true, "assets/img/");
    queue.on("complete", loadComplete, this);
    queue.loadManifest(fileManifest);
}
function handleButtonClick() {
    startButton.addEventListener("click", function (event){
    		gameState = CREATE_GAME;
    	});

    instructionsButton.addEventListener("click", function (event){
            gameState = INSTRUCTIONS;
        });

    restartButton.addEventListener("click", function (event){
            resetGame();
            gameOver = false;
            gameState = CREATE_GAME;
        });
    number1.addEventListener('click', function (event) {
        pressed1.visible = false;
        selectedNumber = 1;
        checkForCorrectNumber();
    });
    number2.addEventListener('click', function (event) {
        pressed2.visible = false;
        selectedNumber = 2;
        checkForCorrectNumber();
    });
    number3.addEventListener('click', function (event) {
        pressed3.visible = false;
        selectedNumber = 3;
        checkForCorrectNumber();
    });
    number4.addEventListener('click', function (event) {
        pressed4.visible = false;
        selectedNumber = 4;
        checkForCorrectNumber();
    });
    number5.addEventListener('click', function (event) {
        pressed5.visible = false;
        selectedNumber = 5;
        checkForCorrectNumber();
    });
    number6.addEventListener('click', function (event) {
        pressed6.visible = false;
        selectedNumber = 6;
        checkForCorrectNumber();
    });
    number7.addEventListener('click', function (event) {
        pressed7.visible = false;
        selectedNumber = 7;
        checkForCorrectNumber();
    });
    number8.addEventListener('click', function (event) {
        pressed8.visible = false;
        selectedNumber = 8;
        checkForCorrectNumber();
    });
    number9.addEventListener('click', function (event) {
        pressed9.visible = false;
        selectedNumber = 9;
        checkForCorrectNumber();
        
    });
    number0.addEventListener('click', function (event) {
        
        pressed0.visible = false;

        selectedNumber = 0;
        checkForCorrectNumber();
        
    });

    number0.addEventListener('mousedown', function (event) {
        number0.visible = false;
        pressed0.visible = true;
        stage.update();
        
    });

    number1.addEventListener('mousedown', function (event) {
        number1.visible = false;
        pressed1.visible = true;
        stage.update();
        
    });

    number2.addEventListener('mousedown', function (event) {
        number2.visible = false;
        pressed2.visible = true;
        stage.update();
        
    });

    number3.addEventListener('mousedown', function (event) {
        number3.visible = false;
        pressed3.visible = true;
        stage.update();
        
    });

    number4.addEventListener('mousedown', function (event) {
        number4.visible = false;
        pressed4.visible = true;
        stage.update();
        
    });

    number5.addEventListener('mousedown', function (event) {
        number5.visible = false;
        pressed5.visible = true;
        stage.update();
        
    });

    number6.addEventListener('mousedown', function (event) {
        number6.visible = false;
        pressed6.visible = true;
        stage.update();
        
    });

    number7.addEventListener('mousedown', function (event) {
        number7.visible = false;
        pressed7.visible = true;
        stage.update();
        
    });

    number8.addEventListener('mousedown', function (event) {
        number8.visible = false;
        pressed8.visible = true;
        stage.update();
        
    });

    number9.addEventListener('mousedown', function (event) {
        number9.visible = false;
        pressed9.visible = true;
        stage.update();
        
    });

}

function checkForCorrectNumber() {
    console.log('spot in array: '+selectedSpotInArray);
    console.log('correct Answer: '+numberSequence[selectedSpotInArray]);
    if(selectedNumber !== numberSequence[selectedSpotInArray]) {
        gameState = GAME_OVER;
    } else {
        totalCorrectInSequence++;
        console.log('correct!!!');
        selectedSpotInArray++;
    }
    console.log('total correct = '+totalCorrectInSequence);
    console.log('sequence length: '+ currentSequenceLength);
    if(totalCorrectInSequence === currentSequenceLength) {
        currentSequenceLength++;
        totalCorrectInSequence = 0;
        selectedSpotInArray = 0;
        hideNumberPad();
        gameState = DISPLAYING_NUMBERS;
        displayNumbers();
        console.log('spot in array after correct: '+selectedSpotInArray);
    }
}

function loadComplete(evt) {
	titleScreen = new createjs.Bitmap(queue.getResult("titleScreen"));
	instructionsScreen = new createjs.Bitmap(queue.getResult("instructionsScreen"));
	startButton = new createjs.Bitmap(queue.getResult("startButton"));
    instructionsButton = new createjs.Bitmap(queue.getResult("instructionsButton"));
    restartButton = new createjs.Bitmap(queue.getResult("restartButton"));
	gameScreen = new createjs.Bitmap(queue.getResult("gameScreen"));
	gameOverScreen = new createjs.Bitmap(queue.getResult("gameOverScreen"));
    number1 = new createjs.Bitmap(queue.getResult('number1'));
    number2 = new createjs.Bitmap(queue.getResult('number2'));
    number3 = new createjs.Bitmap(queue.getResult('number3'));
    number4 = new createjs.Bitmap(queue.getResult('number4'));
    number5 = new createjs.Bitmap(queue.getResult('number5'));
    number6 = new createjs.Bitmap(queue.getResult('number6'));
    number7 = new createjs.Bitmap(queue.getResult('number7'));
    number8 = new createjs.Bitmap(queue.getResult('number8'));
    number9 = new createjs.Bitmap(queue.getResult('number9'));
    number0 = new createjs.Bitmap(queue.getResult('number0'));
    pressed0 = new createjs.Bitmap(queue.getResult('pressed0'));
    pressed1 = new createjs.Bitmap(queue.getResult('pressed1'));
    pressed2 = new createjs.Bitmap(queue.getResult('pressed2'));
    pressed3 = new createjs.Bitmap(queue.getResult('pressed3'));
    pressed4 = new createjs.Bitmap(queue.getResult('pressed4'));
    pressed5 = new createjs.Bitmap(queue.getResult('pressed5'));
    pressed6 = new createjs.Bitmap(queue.getResult('pressed6'));
    pressed7 = new createjs.Bitmap(queue.getResult('pressed7'));
    pressed8 = new createjs.Bitmap(queue.getResult('pressed8'));
    pressed9 = new createjs.Bitmap(queue.getResult('pressed9'));






	handleButtonClick();
	initMouseCords();
    selectedSpotInArray = 0;
    currentSequenceLength = 1;
    totalCorrectInSequence = 0;
	spriteX = 400;
    spriteY = 600;
	mousePositionText = new createjs.Text("Mouse X: " +mouseX + "  Mouse Y:" + mouseY, "15px Arial", "#253742");
	scoreText = new createjs.Text("Score: "+ score, "15px Arial", "#253742"); 
    drawScore();
    generateRandomArray();
	startLoop();
}


function init() {
    resetGameTimer();
    score = 0;
    gameLevelNumber = 1;
    openCanvas();
    loadFiles();
    gameOver = false;

    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;
	
}

function handleKeyDown(event) {
    if(!gameOver) {
    switch(event.keyCode) {
        case 38:
            console.log("Up");
            break;
        case 37:
            console.log("Left");
            
            score--;
            break;
        case 39:
            console.log("Right");
        
            score++;
            break;
        case 40:
            console.log("Down");
            break;
    }
}

}

function handleKeyUp(event) {
    if(!gameOver) {
    switch(event.keyCode) {
        case 38:
            console.log("Up released");
            break;
        case 37:
            console.log("Left released");
            break;
        case 39:
            console.log("Right released");
            break;
        case 40:
            console.log("Down released");
            break;
    }
    }
}

function initMouseCords() {
	stage.on("stagemousemove", function(evt) {

	    mouseX = evt.stageX;
	    mouseY = evt.stageY;

	});	
}

function drawMouseCords() {
	mousePositionText.x = 20;
	mousePositionText.y = 15;
	stage.addChild(mousePositionText);
}


function drawScore() {
	
	scoreText.x = 700; 
	scoreText.y = 15;

	stage.addChild(scoreText);
}

function drawLevelSign() {
	var gameLevel = new createjs.Shape();
            gameLevel.graphics.setStrokeStyle(4, 'square', 'square');
            gameLevel.graphics.beginStroke(('#333'));
            gameLevel.graphics.beginFill("#EFC94C").drawRect(0,0,200, 200);
            gameLevel.graphics.endStroke();
            gameLevel.graphics.endFill();
            
            gameLevel.graphics.endStroke();
            

    var level = new createjs.Text("Level", "30px Arial", "#253742");
    	level.x = 65;
    	level.y = 50;

    var levelNumber = new createjs.Text(gameLevelNumber, "35px Arial", "#253742");
    	levelNumber.x = 90;
    	levelNumber.y = 100;	

    var levelContainer = new createjs.Container();
    		levelContainer.x = 300;
    		levelContainer.y = 800;
    		levelContainer.addChild(gameLevel, level, levelNumber);

            var tween = createjs.Tween.get(levelContainer, {loop:false})
                         .to({x:300, y:200}, 1500, createjs.Ease.bounceOut)
                         .wait(1500)
                         
                         .to({x:300, y:800}, 2500, createjs.Ease.bounceOut);

            stage.addChild(levelContainer);
}



function resetGameTimer() {
	timerCount = 0;
	gameTimer = 0;
}

function resetGame() {
    // resetGameTimer();
    score = 0;
    generateRandomArray();
    selectedSpotInArray = 0;
    currentSequenceLength = 1;
    totalCorrectInSequence = 0;
    // gameLevelNumber = 1;
}

function runGameTimer() {
	timerCount += 1;
	if (timerCount%(FPS/10) ===0 ) {
		gameTimer = timerCount/(FPS);
	}
}

function getScore() {
    return currentSequenceLength - 1;
}

function startGame() {
	score = 0;
}

function generateRandomArray() {
    numberSequence = [];
    for(var i = 0; i<30; i++) {
        var ranNumber = Math.floor((Math.random() * 10));
        numberSequence.push(ranNumber);
    }

}

function cycleThroughArray() {
    numberSequence.forEach(function(num) {
        console.log(num);
    });
}

function displayNumbers() {
    var spotInArray = 0;
        
    function myLoop () { 
        
                     
        setTimeout(function () {
            if(typeof displayedNumber !== 'undefined') {    
                 
                 stage.removeChild(displayedNumber);

            }
            
    
            displayedNumber = new createjs.Text(numberSequence[spotInArray], "70px Arial", "#253742"); 
            displayedNumber.x = 370; 
            displayedNumber.y = 100;
            displayedNumber.textBaseline = "alphabetic";
            stage.addChild(displayedNumber);
            spotInArray++;
            if(spotInArray !== currentSequenceLength + 1) {
                stage.update();                    
            } 
            if (spotInArray < currentSequenceLength + 1) {
            setTimeout(function() {
                    myLoop();            
                    displayedNumber.visible = false;
                 },    1400);            
            } else {
                stage.removeChild(displayedNumber);
                gameState = ACCEPTING_NUMBERS;
            }                      
         }, 190);
        // setTimeout(function() {
        //     stage.removeChild(displayedNumber);
        // }, 120);
    
    }
    myLoop();

}

function hideNumberPad() {
    //stage.removeChild(number1);
    number1.visible = false;
    number2.visible = false;
    number3.visible = false;
    number4.visible = false;
    number5.visible = false;
    number6.visible = false;
    number7.visible = false;
    number8.visible = false;
    number9.visible = false;
    number0.visible = false;
    stage.update();
    //stage.removeChild(number0);

}

function drawNumberPad() {
   
    number1.visible = true;
    number2.visible = true;
    number3.visible = true;
    number4.visible = true;
    number5.visible = true;
    number6.visible = true;
    number7.visible = true;
    number8.visible = true;
    number9.visible = true;
    number0.visible = true;

    stage.update();

}

function startLoop() {
	createjs.Ticker.addEventListener("tick", loop);
    createjs.Ticker.setFPS(FPS);
}

function main() {
	init();
	gameState = TITLE;
	gameOver = false;
}

function loop() {
	//runGameTimer();
	//mousePositionText.text = "Mouse X: " +mouseX + "  Mouse Y:" + mouseY;
	scoreText.text = "Score: " + getScore(); 
    //console.log(gameState);
	switch(gameState) {
     //case CONSTRUCT:
       //construct();
       //gameState = HOLD;
       //break;
       case TITLE:
       drawTitleScreen();
        break;
       case INSTRUCTIONS:
        drawInstructionsScreen();
         break;
       case CREATE_GAME:
         drawGameScreen();
         
         //drawLevelSign();

         //startGame();
         //showGame();
         //hideTitle();
         gameState = DISPLAYING_NUMBERS;
         //resetGameTimer();
            displayNumbers();
         break;
       case DISPLAYING_NUMBERS:
        drawScore();
        break;
       case ACCEPTING_NUMBERS:

         drawNumberPad();
         //checkSubmittedNumber();
         //gameLoop();

         //drawMouseCords();
         drawScore();
         
         break;
       case GAME_OVER:
         drawGameOverScreen();
         //hideGame();
         break;
       default:
   }
stage.update();
}
if( !!(window.addEventListener)) {
	window.addEventListener ("DOMContentLoaded", main);

}else{//MSIE
	window.attachEvent("onload", main);
}
