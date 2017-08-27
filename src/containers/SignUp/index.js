import { connect } from 'react-redux';
import SignupComponent from './SignUp';
import * as actions from '../../actions/usersAction';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({
	signUp: (user) => dispatch(actions.signUp(user))
});

const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignupComponent);
export default SignUp;