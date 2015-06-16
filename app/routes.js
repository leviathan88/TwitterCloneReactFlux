import React from 'react';
import {
	Route, DefaultRoute
}
from 'react-router';

import App from './components/App.react';
import Body from './components/Body.react';


const routes = ( < Route name = "app"
	path = "/"
	handler = {
		App
	} >
	< DefaultRoute handler = {
		Body
	}
	/> < /Route >

);

export default routes;