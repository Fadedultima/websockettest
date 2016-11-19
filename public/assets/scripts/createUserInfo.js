var playerOne = new createjs.Text("", "14px Arial", "#000");
var playerTwo = new createjs.Text("", "14px Arial", "#000");
var playerThree = new createjs.Text("", "14px Arial", "#000");
var playerFour = new createjs.Text("", "14px Arial", "#000");
var score1 = 0;
var score2 = 0;
var score3 = 0;
var score4 = 0;
var health1 = 10;
var health2 = 10;
var health3 = 10;
var health4 = 10;
var deaths1 = 0;
var deaths2 = 0;
var deaths3 = 0;
var deaths4 = 0;

function setupInfo() {
    playerOne.x = playerOne.y = 5;
    playerTwo.x = 400;
    playerTwo.y = 5;
    playerThree.x = 5;
    playerThree.y = 550;
    playerFour.x = 400;
    playerFour.y = 550;

    stage.addChild(playerOne);
    stage.addChild(playerTwo);
    stage.addChild(playerThree);
    stage.addChild(playerFour);
}

function updateInfo() {
    if (connectedUsers[0] == null) {
        playerOne.text = "Waiting for a Player 1";
    } else {
        playerOne.text = "p1: " + connectedUsers[0] + ", score: " + score1 + ", health: " + health1 + ", deaths: " + deaths1;
    }
    if (connectedUsers[1] == null) {
        playerTwo.text = "Waiting for a Player 2";
    } else {
        playerTwo.text = "p2: " + connectedUsers[1] + ", score: " + score2 + ", health: " + health2 + ", deaths: " + deaths2;
    }
    if (connectedUsers[2] == null) {
        playerThree.text = "Waiting for a Player 3";
    } else {
        playerThree.text = "p3: " + connectedUsers[2] + ", score: " + score3 + ", health: " + health3 + ", deaths: " + deaths3;
    }
    if (connectedUsers[3] == null) {
        playerFour.text = "Waiting for a Player 4";
    } else {
        playerFour.text = "p4: " + connectedUsers[3] + ", score: " + score4 + ", health: " + health4 + ", deaths: " + deaths4;
    }


    stage.update();
}