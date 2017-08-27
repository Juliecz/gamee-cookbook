import * as API from '../api/index';

export const signIn = (user) => (dispatch) => {
	API.signIn(user)
		.then((response) => {
			window.localStorage.setItem('accessToken', response.data);
		})
		.catch(err => console.log(err));
};
