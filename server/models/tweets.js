var mongoose = require('mongoose');

var TweetSchema = new mongoose.Schema({
	id: String,
	text: String,
	username: String,
	count: {
		type: Number,
		min: 0
	},
	date: {
		type: Date,
		default: Date.now
	}
});

Tweet = mongoose.model('Tweet', TweetSchema);