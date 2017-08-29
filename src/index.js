import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './config/store';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import registerServiceWorker from './config/registerServiceWorker';
import { syncHistoryWithStore } from 'react-router-redux';
import ReduxToastr from 'react-redux-toastr';

import './index.css';
import App from './containers/App/index';
import Recipes from './containers/Recipes';
import Recipe from './containers/Recipe';
import SignUp from './containers/SignUp';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<div>
			<ReduxToastr
				// timeOut={4000}
				// newestOnTop={false}
				// preventDuplicates
				// position="top-left"
				// transitionIn="fadeIn"
				// transitionOut="fadeOut"
				// progressBar
			/>
			
			<Router history={history}>
				<Route path="/" component={App}>
					<IndexRoute component={Recipes}/>
					<Route path="/detail/:id" component={Recipe}/>
					<Route path="signup" components={SignUp}/>
				</Route>
			</Router>
		</div>
	</Provider>,
	document.getElementById('root')
);

registerServiceWorker();
