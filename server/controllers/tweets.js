var mongoose = require('mongoose');
var _ = require('lodash');
var Tweet = mongoose.model('Tweet');

exports.all = function (req, res) {
	Tweet.find({}).exec(function (err, tweets) {
		if (!err) {
			res.json(tweets);
		} else {
			console.log('Error in first query');
		}
	});
};

exports.add = function (req, res) {
	Tweet.create(req.body, function (err) {
		if (err) {
			console.log(err);
			res.status(400).send(err);
		}
		res.status(200).send('Added successfully');
	});
};