var users = [];
var connected;
var express = require('express'),
    app = express(),
    http = require('http').Server(app),
    io = require('socket.io')(http);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', function (socket) {
    if (io.engine.clientsCount <= 4) {
        console.log('a user connected');
        connected = true;
        console.log(io.engine.clientsCount);
    } else {
        connected = false;
        console.log(users);
        console.log("Max number of player achieved");
    }

    socket.on("disconnect", function () {
        console.log(socket.id + "user has disconnected");
        for (var i = 0; i < users.length; i++) {
            if (socket.username === users[i]) {
                users[i] = null;
                io.sockets.emit('update-list', users);
            }
        }
    });

    socket.on('set-stats', function (index, score, health, deaths) {
        io.sockets.emit('update-UserStats', index, score, health, deaths);
    });

    socket.on('send-username', function (my_name) {
        socket.username = my_name;
        if (io.engine.clientsCount <= 4) {
            for (var i = 0; i <= users.length; i++) {
                if (i == users.length && connected) {
                    users.push(my_name);
                    io.sockets.emit('update-list', users);
                    io.sockets.emit('update-list', users);
                    break;
                } else if (users[i] == null) {
                    users[i] = my_name;
                    io.sockets.emit('update-list', users);
                    io.sockets.emit('update-list', users);
                    break;
                }
            }
        } else {
            connected = false;
            io.sockets.emit('update-list', users);
            console.log("No room for connection");
            io.sockets.emit('update-list', users);
        }

    });
});


http.listen(3000, function () {
    console.log('listening on *:3000');
});

app.use(express.static('public'));