import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './containers/Layout/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import mundoSportApp from './reducers';
import promise from 'redux-promise-middleware';

const store = createStore(
  mundoSportApp,
  applyMiddleware(
    promise(),
    thunkMiddleware,
    createLogger(),
  )
);

ReactDOM.render(
	<Provider store={ store }>
		<Router>
			<Layout />
		</Router>
	</Provider>,
	document.getElementById('app')
);
