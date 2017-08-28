import * as API from '../api/index';
import * as types from './types';
import * as messages from './messages';
import alert from '../helpers/alert';
import JWTDecode from 'jwt-decode';

const signInSuccess = (user) => ({
	type: types.SIGNIN_SUCCESS,
	user
});

const logOutSuccess = () => ({
	type: types.LOGOUT
});

export const authenticate = () => (dispatch) => {
	if (localStorage.getItem('accessToken')) {
		const user = JWTDecode(localStorage.getItem('accessToken'));
		dispatch(signInSuccess(user));
	}
};

export const signIn = (user) => (dispatch) => {
	API.signIn(user)
		.then((response) => {
			localStorage.setItem('accessToken', response.data);
			dispatch(authenticate());
		})
		.catch(err => alert(messages.SIGN_IN_ERROR));
};

export const signUp = (user) => (dispatch) => {
	API.signUp(user)
		.then((response) => {
			localStorage.setItem('accessToken', response.data);
			dispatch(authenticate());
		})
		.catch((err) => console.log('Error', err));
};

export const logOut = () => (dispatch) => {
	localStorage.removeItem('accessToken');
	dispatch(logOutSuccess());
};