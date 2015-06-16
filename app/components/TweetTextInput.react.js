import React from 'react';
const ENTER_KEY_CODE = 13;


export default class TweetTextInput extends React.Component {

	_onSave = () => {
		this.props.onSave(this.props.value);
	}

	_onChange = (event) => {
		this.props.onChange(event.target.value);
	}

	_onKeyDown = (event) => {
		if (event.keyCode === ENTER_KEY_CODE) {
			this._onSave();
		}
	}

	render() {
		return ( < input className = {
				this.props.className
			}
			placeholder = {
				this.props.placeholder
			}
			onChange = {
				this._onChange
			}
			onKeyDown = {
				this._onKeyDown
			}
			value = {
				this.props.value
			}
			autoFocus = {
				true
			}
			/>
		);
	}
}

TweetTextInput.propTypes = {
	className: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	value: React.PropTypes.string,
	onSave: React.PropTypes.func,
	onChange: React.PropTypes.func
};