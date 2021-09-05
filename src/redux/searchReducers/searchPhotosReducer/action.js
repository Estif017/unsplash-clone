import axios from 'axios';
import {
	SEARCH_PHOTOS_PENDING,
	SEARCH_PHOTOS_SUCCESS,
	SEARCH_PHOTOS_FAIL,
	DONE_SEARCHING_PHOTOS,
	RESET_SEARCH_PHOTOS,
} from './index';

export const searchPhotos = (query) => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({ type: SEARCH_PHOTOS_PENDING });
		const { data } = await axios.get(
			`https://api.unsplash.com/search/photos?page=${state.searchPhotos.page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
		);
		dispatch({
			type: SEARCH_PHOTOS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({ type: SEARCH_PHOTOS_FAIL });
		console.error(error);
	}
};

export const doneSearching = () => ({ type: DONE_SEARCHING_PHOTOS });
export const resetSearchPhotos = () => ({
	type: RESET_SEARCH_PHOTOS,
});
