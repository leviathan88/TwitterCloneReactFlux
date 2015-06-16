import React from 'react';
import TweetActions from '../actions/TweetActions';

export default class TweetItem extends React.Component {

	render() {
		return (

			< li key = {
				this.props.id
			} >
			< span > {
				this.props.username
			} < /span> < span  > {
			this.props.text
		} < /span>				 < /li >
	);
}
}

TweetItem.propTypes = {
	id: React.PropTypes.string,
	text: React.PropTypes.string,
	username: React.PropTypes.string
};