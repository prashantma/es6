var express = require('express');
var path = require('path');

var app = express();

//app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/style.css', function(req, res) {
	res.sendFile(path.join(__dirname + '/style.css'));
});

app.get('/js/reactapp.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/reactapp.js'));
});
app.get('/js/byebye.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/byebye.js'));
});
app.get('/js/common.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/js/common.js'));
});
app.get('/jsoops.js', function(req, res) {
	res.sendFile(path.join(__dirname + '/jsoops.js'));
});

app.listen(1337, function() {
	console.log('running...');
});
