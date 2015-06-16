import Immutable from 'immutable';
import TweetActions from '../actions/TweetActions';
import {
	fromJSOrdered
}
from '../utils/immutableHelpers';
import alt from '../alt';

class TweetStore {
	constructor() {

		this.tweets = Immutable.OrderedMap({});
		this.newTweet = '';
		this.on('init', this.bootstrap);
		this.on('bootstrap', this.bootstrap);

		this.bindListeners({
			handleCreate: TweetActions.CREATE,
			handleTyping: TweetActions.TYPING
		});
	}

	bootstrap() {
		if (!Immutable.OrderedMap.isOrderedMap(this.tweets)) {
			this.tweets = fromJSOrdered(this.tweets);
		}
		this.newTweet = '';
	}



	handleCreate(data) {
		const id = data.id;
		this.tweets = this.tweets.set(id, Immutable.fromJS(data));
		this.emitChange();
	}


	handleTyping(text) {
		this.newTweet = text;
		this.emitChange();
	}

}
export default alt.createStore(TweetStore, 'TweetStore');