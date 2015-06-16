import React from 'react';
import Immutable from 'immutable';

import EntryBox from './EntryBox.react';
import MainSection from './MainSection.react';
import TweetStore from '../stores/TweetStore';

export default class Body extends React.Component {
	constructor(props) {
		super(props);
		this.state = TweetStore.getState();
	}

	componentDidMount() {
		TweetStore.listen(this._onChange);
	}

	componentWillUnmount() {
		TweetStore.unlisten(this._onChange);
	}

	_onChange = () => {
		this.setState({
			tweets: TweetStore.getState().tweets,
			newTweet: TweetStore.getState().newTweet
		});
	}

	render() {
		return ( < div >

			< EntryBox tweet = {
				this.state.newTweet
			}
			/> < MainSection tweets = {
			this.state.tweets
		}
		/>			 < /div >
	);
}
}

Body.propTypes = {
	tweets: React.PropTypes.instanceOf(Immutable.OrderedMap),
	newTweet: React.PropTypes.string
};