import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './config/registerServiceWorker';
import { syncHistoryWithStore } from 'react-router-redux';

import './index.css';
import App from './containers/App/index';
import Recipes from './containers/Recipes';
import Recipe from './containers/Recipe';
import SignUp from './containers/SignUp';
import Test from './containers/Test';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Recipes}/>
				<Route path="/detail/:id" component={Recipe}/>
				<Route path="signup" components={SignUp}/>
				<Route path="/test" components={Test}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
