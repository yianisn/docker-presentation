'use strict';

var path = require('path');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'presentation')));
app.use('/bower_components', express.static(path.join(__dirname, 'bower_components')));

server.listen(port);
console.log('docker presentation running at port ' + port);
