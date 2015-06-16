import alt from '../alt';
import TweetWebAPIUtils from '../utils/TweetWebAPIUtils';

class TweetActions {
	create(text) {
		if (text.trim().length > 0) {
			const id = Date.now().toString();
			const username = "@elvis:";
			const data = {
				id: id,
				username: username,
				count: 1,
				text: text
			};
			this.dispatch(data);
			TweetWebAPIUtils.addTweet(data)
				.done(function success(res) {
					console.log(res);
				})
				.fail(function failure(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR);
					console.log(textStatus);
					console.log(errorThrown);
				});
		}
	}
	typing(text) {
		this.dispatch(text);
	}

}

export default alt.createActions(TweetActions);