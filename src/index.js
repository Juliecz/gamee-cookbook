import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import { Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './config/registerServiceWorker';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import App from './containers/App/App';
import Recipes from './containers/Recipes/index';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/recipes" component={Recipes}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
