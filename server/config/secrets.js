module.exports = {
	// Find the appropriate database to connect to, default to localhost if not found.
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/Tweets',
	sessionSecret: process.env.SESSION_SECRET || 'superSecret',
};