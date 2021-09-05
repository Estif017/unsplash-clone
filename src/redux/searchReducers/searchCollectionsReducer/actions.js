import axios from 'axios';
import {
	SEARCH_COLLECTIONS_PENDING,
	SEARCH_COLLECTIONS_SUCCESS,
	SEARCH_COLLECTIONS_FAIL,
	DONE_SEARCHING_COLLECTIONS,
	RESET_SEARCH_COLLECTIONS,
} from './index';

export const searchCollections = (query) => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({ type: SEARCH_COLLECTIONS_PENDING });
		const { data } = await axios.get(
			`https://api.unsplash.com/search/collections?page=${state.searchCollections.page}&query=${query}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
		);
		dispatch({
			type: SEARCH_COLLECTIONS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({ type: SEARCH_COLLECTIONS_FAIL });
		console.error(error);
	}
};

export const doneSearching = () => ({ type: DONE_SEARCHING_COLLECTIONS });
export const resetSearchCollections = () => ({
	type: RESET_SEARCH_COLLECTIONS,
});
