import React from 'react';
import Immutable from 'immutable';
import TweetItem from './TweetItem.react';

export default class MainSection extends React.Component {
	render() {
		const tweets = this.props.tweets.map((tweet) => {
				return ( < TweetItem id = {
						tweet.get('id')
					}
					key = {
						tweet.get('id')
					}
					username = {
						tweet.get('username')
					}
					text = {
						tweet.get('text')
					}
					/>);
				});
			return ( < div >
				< h3 > Tweet List < /h3> < ul > {
				tweets
			} < /ul> < /div >
		);
	}
}

MainSection.propTypes = {
	tweets: React.PropTypes.instanceOf(Immutable.OrderedMap)
};