import axios from 'axios';
import {
	GET_USER_PHOTOS_PENDING,
	GET_USER_PHOTOS_SUCCESS,
	GET_USER_PHOTOS_FAIL,
	FETCH_MORE_USER_PHOTOS,
	FETCHING_USER_PHOTOS_DONE,
	RESET_USER_PAGE,
} from './index';

export const fetchUserPhotos = (userId) => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({ type: GET_USER_PHOTOS_PENDING });
		const { data } = await axios.get(
			`https://api.unsplash.com/users/${userId}/photos?page=${state.userPost.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
		);
		dispatch({
			type: GET_USER_PHOTOS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_USER_PHOTOS_FAIL,
		});
		console.error(error);
	}
};

export const fetchNextPage = () => ({
	type: FETCH_MORE_USER_PHOTOS,
});

export const fetchingDone = () => ({
	type: FETCHING_USER_PHOTOS_DONE,
});

export const resetUserPage = () => ({ type: RESET_USER_PAGE });
