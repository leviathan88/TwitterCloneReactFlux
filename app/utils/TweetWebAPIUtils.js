import $ from 'jquery';

const propIsEnumerable = Object.prototype.propertyIsEnumerable;

const toObject = (val) => {
	if (val == null) {
		throw new TypeError('Object assign cannot be called with null or undefined');
	}

	return Object(val);
};

const ownEnumerableKeys = (obj) => {
	let keys = Object.getOwnPropertyNames(obj);

	if (Object.getOwnPropertySymbols) {
		keys = keys.concat(Object.getOwnPropertySymbols(obj));
	}

	return keys.filter((key) => {
		return propIsEnumerable.call(obj, key);
	});
};

const assign = (() =>
	Object.assign ? Object.assign : (target, ...sources) => {
		let keys;
		let to = toObject(target);
		sources.forEach((val) => {
			keys = ownEnumerableKeys(Object(val));
			keys.forEach((key) => {
				to[key] = val[key];
			});
		});
		return to;
	}
)();

const merge = (...sources) => assign({}, ...sources);

const utils = {
	addTweet: (tweet) => {
		return $.ajax({
			url: '/tweet',
			data: JSON.stringify(tweet),
			type: 'POST',
			contentType: 'application/json'
		});
	}

};

export default utils;