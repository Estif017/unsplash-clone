import axios from 'axios';
import {
	SEARCH_USERS_PENDING,
	SEARCH_USERS_SUCCESS,
	SEARCH_USERS_FAIL,
	DONE_SEARCHING_USERS,
	RESET_SEARCH_USERS,
} from './index';

export const searchUsers = (query) => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({ type: SEARCH_USERS_PENDING });
		const { data } = await axios.get(
			`https://api.unsplash.com/search/users?page=${state.searchUsers.page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
		);
		dispatch({
			type: SEARCH_USERS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({ type: SEARCH_USERS_FAIL });
		console.error(error);
	}
};

export const doneSearching = () => ({ type: DONE_SEARCHING_USERS });
export const resetSearchUsers = () => ({
	type: RESET_SEARCH_USERS,
});
