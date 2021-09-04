import axios from 'axios';
import {
	GET_hIGHLIGHT_PHOTOS_PENDING,
	GET_hIGHLIGHT_PHOTOS_SUCCESS,
	GET_hIGHLIGHT_PHOTOS_FAIL,
} from './index';
export const getHighlightPhotos = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: GET_hIGHLIGHT_PHOTOS_PENDING,
		});
		const { data } = await axios.get(
			`https://api.unsplash.com/collections/${id}/photos?client_id=${process.env.REACT_APP_ACCESS_KEY}`
		);
		dispatch({ type: GET_hIGHLIGHT_PHOTOS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: GET_hIGHLIGHT_PHOTOS_FAIL });
		console.error(error);
	}
};
