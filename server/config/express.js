var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var path = require('path');
var swig = require('swig');
var secrets = require('./secrets');
var methodOverride = require('method-override');
var lusca = require('lusca');
var Iso = require('iso');

module.exports = function (app) {
	app.set('port', (process.env.PORT || 4000));

	app.engine('html', swig.renderFile);
	app.set('view engine', 'html');
	app.set('views', path.join(__dirname, '..', 'views'));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(methodOverride());
	app.use('/static', express.static(path.join(__dirname, '../..', 'public')));
	app.use(cookieParser());

};