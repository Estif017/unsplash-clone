import axios from 'axios';
import {
	FETCH_USER_PROFILE_PENDING,
	FETCH_USER_PROFILE_SUCCESS,
	FETCH_USER_PROFILE_FAIL,
} from './index';

export const fetchUserProfile = (userId) => async (dispatch, getState) => {
	try {
		dispatch({ type: FETCH_USER_PROFILE_PENDING });
		const { data } = await axios.get(
			`https://api.unsplash.com/search/users?&query=${userId}&per_page=15&client_id=${process.env.REACT_APP_ACCESS_KEY}`
		);
		dispatch({
			type: FETCH_USER_PROFILE_SUCCESS,
			payload: data.results[0],
		});
	} catch (error) {
		dispatch({
			type: FETCH_USER_PROFILE_FAIL,
		});
		console.error(error);
	}
};
