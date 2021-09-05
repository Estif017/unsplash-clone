import axios from 'axios';
import {
	GET_COLLECTION_PHOTOS_PENDING,
	GET_COLLECTION_PHOTOS_SUCCESS,
	GET_COLLECTION_PHOTOS_FAIL,
	FETCH_NEXT_PHOTO_COLLECTION_PAGE,
	FETCHING_PHOTO_COLLECTIONS_DONE,
} from './index';

export const getPhotoCollections =
	(collectionId) => async (dispatch, getState) => {
		const state = getState();
		try {
			dispatch({ type: GET_COLLECTION_PHOTOS_PENDING });
			const { data } = await axios.get(
				`https://api.unsplash.com/collections/${collectionId}/photos?page=${state.photoCollections.page}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=15`
			);
			dispatch({
				type: GET_COLLECTION_PHOTOS_SUCCESS,
				payload: data,
			});
		} catch (error) {
			dispatch({
				type: GET_COLLECTION_PHOTOS_FAIL,
			});
			console.error(error);
		}
	};

export const fetchNextPage = () => ({
	type: FETCH_NEXT_PHOTO_COLLECTION_PAGE,
});

export const noNextPage = () => ({ type: FETCHING_PHOTO_COLLECTIONS_DONE });
