import Iso from 'iso';
import React from 'react';
import Router from 'react-router';

import routes from '../routes';

export default function IsomorphicRouterRenderer(alt) {
	let renderedMarkup;
	if (typeof window === 'undefined') {
		renderedMarkup = (state, url) => {
			let markup;
			Router.run(routes, url, (Handler) => {
				alt.bootstrap(state);
				let content = React.renderToString(React.createElement(Handler));
				markup = Iso.render(content, alt.flush());
			});
			return markup;
		};
	} else {
		renderedMarkup = Iso.bootstrap((state, _, container) => {
			alt.bootstrap(state);
			Router.run(routes, Router.HistoryLocation, (Handler) => {
				let node = React.createElement(Handler);
				React.render(node, container);
			});
		});
	}

	return renderedMarkup;
}