import axios from 'axios';
import {
	GET_COLLECTIONS_PENDING,
	GET_COLLECTIONS_SUCCESS,
	GET_COLLECTIONS_FAIL,
	FETCH_COLLECTIONS_NEXT_PAGE,
} from './index';

export const getCollections = () => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({
			type: GET_COLLECTIONS_PENDING,
		});
		const { data } = await axios.get(
			`https://api.unsplash.com/collections/?page=${state.collectionsPage.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest&per_page=15`
		);
		dispatch({
			type: GET_COLLECTIONS_SUCCESS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: GET_COLLECTIONS_FAIL,
		});
		console.error(error);
	}
};

export const fetchNextPage = () => ({
	type: FETCH_COLLECTIONS_NEXT_PAGE,
});
