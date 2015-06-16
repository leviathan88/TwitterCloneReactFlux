var tweets = require('../controllers/tweets');
var express = require('express');
var mongoose = require('mongoose');
var _ = require('lodash');
var Tweet = mongoose.model('Tweet');
var App = require('../../public/assets/app.server');

module.exports = function (app, io) {



	app.get('/tweet', tweets.all);

	app.post('/tweet', function (req, res) {
		tweets.add(req, res);
		io.sockets.emit('tweet change');
	});

	app.get('*', function (req, res, next) {
		if (/(\.png$|\.map$|\.jpg$)/.test(req.url)) return;
		Tweet.find({}).exec(function (err, tweets) {
			if (!err) {
				var tweetmap = _.indexBy(tweets, 'id');

				res.locals.data = {
					TweetStore: {
						tweets: tweetmap
					}
				};

				var content = App(JSON.stringify(res.locals.data || {}), req.url);
				res.render('index', {
					isomorphic: content
				});
			} else {
				console.log('Error in first query');
			}
		});
	});

};;