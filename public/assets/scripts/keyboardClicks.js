var KEYCODE_LEFT = 37;
var KEYCODE_UP = 38;
var KEYCODE_RIGHT = 39;
var KEYCODE_DOWN = 40;
var KEYCODE_SPACE = 32;
var KEYCODE_A = 65;
var KEYCODE_W = 87;
var KEYCODE_D = 68;
var KEYCODE_S = 83;

stage.on("stagemousedown", function (evt) {
    console.log(my_name);
    for (var i = 0; i < connectedUsers.length; i++) {
        if (connectedUsers[i] == my_name) {
            if (i == 0) {
                score1 += 10;
                health1 += 5;
                deaths1 += 1;
                socket.emit('set-stats', i, score1, health1, deaths1);
                break;
            } else if (i == 1) {
                score2 += 10;
                health2 += 5;
                deaths2 += 1;
                socket.emit('set-stats', i, score2, health2, deaths2);
                break;
            } else if (i == 2) {
                score3 += 10;
                health3 += 5;
                deaths3 += 1;
                socket.emit('set-stats', i, score3, health3, deaths3);
                break;
            } else if (i == 3) {
                score4 += 10;
                health4 += 5;
                deaths4 += 1;
                socket.emit('set-stats', i, score4, health4, deaths4);
                break;
            }
        }
    }
});

function handleKeyDown(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_RIGHT:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_UP:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_SPACE:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_A:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_D:
        console.log(evt.keyCode + " down");
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " down");
        return false;
    }
}

function handleKeyUp(evt) {
    if (!evt) {
        var evt = window.event;
    }
    switch (evt.keyCode) {
    case KEYCODE_LEFT:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_RIGHT:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_UP:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_DOWN:
        console.log(evt.keyCode + " up");
        break;
    case KEYCODE_SPACE:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_A:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_W:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_D:
        console.log(evt.keyCode + " up");
        return false;
    case KEYCODE_S:
        console.log(evt.keyCode + " up");
        return false;
    }
}

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;