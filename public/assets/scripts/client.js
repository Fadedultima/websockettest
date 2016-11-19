var my_name;
var socket;
var connectedUsers = [];

$('document').ready(function () {
    socket = io();
    my_name = randNum();

    socket.emit('send-username', my_name);
});

socket.on('update-list', function (users) {
    connectedUsers = users;
	console.log(connectedUsers);
	if (connectedUsers.length == 4) {
		var goAhead = true;
		for(var i = 0; i < connectedUsers.length; i++){
			if(connectedUsers[i] == null){
				goAhead = false;
			}
			if(my_name == connectedUsers[i]){
				goAhead = false;
			}
		}
		if(goAhead){
			noRoomScreen.visible = true;
		}		
	 
	}
});

socket.on('update-UserStats', function (index, score, health, deaths) {
    if (index == 0) {
        score1 = score;
        health1 = health;
        deaths1 = deaths;
        stage.update();
    } else if (index == 1) {
        score2 = score;
        health2 = health;
        deaths2 = deaths;
        stage.update();
    } else if (index == 2) {
        score3 = score;
        health3 = health;
        deaths3 = deaths;
        stage.update();
    } else if (index == 3) {
        score4 = score;
        health4 = health;
        deaths4 = deaths;
        stage.update();
    }
});

function randNum() {
    var meow = Math.random(0, 100);
    return meow;
}