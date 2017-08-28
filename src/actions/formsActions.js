import * as types from './types';

export const signinFormUpdate = (id, value) => ({
	type: types.SIGNIN_UPDATE,
	id, value
});

export const objectUpdate = (id, value) => ({
	type: types.OBJECT_UPDATE,
	id, value
});