import { connect } from 'react-redux';
import AppComponent from './App';
import * as actions from '../../actions/usersActions';
import * as formsActions from '../../actions/formsActions';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({
	signin: state.forms.signin,
	user: state.user
});

const mapDispatchToProps = (dispatch) => ({
	signIn: (user) => dispatch(actions.signIn(user)),
	redirect: (path) => dispatch(push(path)),
	authenticate: () => dispatch(actions.authenticate()),
	logOut: () => dispatch(actions.logOut()),
	setSigninForm: (id, value) => dispatch(formsActions.signinFormUpdate(id, value)),
	formsObjectUpdate: (id, value) => dispatch(formsActions.objectUpdate(id, value))
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;