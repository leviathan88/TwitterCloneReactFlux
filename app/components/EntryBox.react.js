import React from 'react';
import TweetActions from '../actions/TweetActions';
import TweetTextInput from './TweetTextInput.react';

export default class EntryBox extends React.Component {
	_onSave = (text) => {
		TweetActions.create(text);
	}

	_onChange = (text) => {
		TweetActions.typing(text);
	}

	render() {
		return ( < div >
			< div >
			USER NAME: @elvis < /div > < TweetTextInput value = {
				this.props.tweet
			}
			placeholder = "Please enter your tweet"
			onChange = {
				this._onChange
			}
			onSave = {
				this._onSave
			}
			/> < /div >
		);
	}
}

EntryBox.propTypes = {
	tweet: React.PropTypes.string
};