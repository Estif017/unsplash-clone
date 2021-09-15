import axios from 'axios';
import {
	GET_HOME_PAGE_PHOTOS_PENDING,
	GET_HOME_PAGE_PHOTOS_SUCCESS,
	GET_HOME_PAGE_PHOTOS_FAIL,
	FETCH_HOME_NEXT_PAGE,
} from './index';

export const getPhoto = () => async (dispatch, getState) => {
	const state = getState();
	try {
		dispatch({ type: GET_HOME_PAGE_PHOTOS_PENDING });
		const { data } = await axios.get(
			`https://api.unsplash.com/photos/?page=${state.homePage.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&order_by=latest&per_page=3`
		);
		dispatch({ type: GET_HOME_PAGE_PHOTOS_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: GET_HOME_PAGE_PHOTOS_FAIL });
		console.error(error);
	}
};

export const fetchNextPage = () => ({
	type: FETCH_HOME_NEXT_PAGE,
});
