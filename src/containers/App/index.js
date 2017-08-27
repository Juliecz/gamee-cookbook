import { connect } from 'react-redux';
import AppComponent from './App';
import * as actions from '../../actions/usersAction';
import * as recipeActions from '../../actions/recipesAction';

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
	signIn: (user) => dispatch(actions.signIn(user)),
	postRecipe: (recipe) => dispatch(recipeActions.postRecipe(recipe))
});

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);
export default App;