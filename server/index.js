var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var secrets = require('./config/secrets');

var connect = function () {
	mongoose.connect(secrets.db, function (err, res) {
		if (err) {
			console.log('Error connecting to: ' + secrets.db + '. ' + err);
		} else {
			console.log('Succeeded connected to: ' + secrets.db);
		}
	});
};
connect();
mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect)


fs.readdirSync(__dirname + '/models').forEach(function (file) {
	if (~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

require('./config/express')(app);
require('./config/routes')(app, io);
server.listen(app.get('port'));