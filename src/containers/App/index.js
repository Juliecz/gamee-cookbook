import { connect } from 'react-redux';
import AppComponent from './App';
import * as actions from '../../actions/usersAction';
import * as recipeActions from '../../actions/recipesAction';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({
	user: state.user
});

const mapDispatchToProps = (dispatch) => ({
	signIn: (user) => dispatch(actions.signIn(user)),
	postRecipe: (recipe) => dispatch(recipeActions.postRecipe(recipe)),
	redirect: (path) => dispatch(push(path)),
	authenticate: () => dispatch(actions.authenticate()),
	logOut: () => dispatch(actions.logOut())
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;