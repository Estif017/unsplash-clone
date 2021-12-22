const initialState = {
	photos: [],
	isLoading: false,
	hasError: false,
	hasMore: true,
	page: 1,
	total: 0,
};

export const GET_COLLECTION_PHOTOS_PENDING = 'GET_COLLECTION_PHOTOS_PENDING';
export const GET_COLLECTION_PHOTOS_SUCCESS = 'GET_COLLECTION_PHOTOS_SUCCESS';
export const GET_COLLECTION_PHOTOS_FAIL = 'GET_COLLECTION_PHOTOS_FAIL';
export const FETCH_NEXT_PHOTO_COLLECTION_PAGE = 'FETCH_NEXT_PAGE';
export const FETCHING_PHOTO_COLLECTIONS_DONE =
	'FETCHING_PHOTO_COLLECTIONS_DONE';
export const CLEAR_PREVIOUS_PHOTO_COLLECTIONS =
	'CLEAR_PREVIOUS_PHOTO_COLLECTIONS';

const photoCollectionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COLLECTION_PHOTOS_PENDING:
			return {
				...state,
				hasError: false,
				isLoading: true,
			};
		case GET_COLLECTION_PHOTOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				photos: [...state.photos, ...action.payload],
				total: action.payload.total,
			};
		case GET_COLLECTION_PHOTOS_FAIL:
			return {
				isLoading: false,
				hasError: true,
			};
		case FETCH_NEXT_PHOTO_COLLECTION_PAGE:
			return {
				...state,
				page: state.page + 1,
			};
		case FETCHING_PHOTO_COLLECTIONS_DONE:
			return {
				...state,
				hasMore: false,
			};
		case CLEAR_PREVIOUS_PHOTO_COLLECTIONS:
			return {
				photos: [],
				isLoading: false,
				hasError: false,
				hasMore: true,
				page: 1,
				total: 0,
			};
		default:
			return state;
	}
};

export default photoCollectionsReducer;

export const photoSelector = (state) => state.photoCollections.photos;
export const loadingSelector = (state) => state.photoCollections.isLoading;
export const errorSelector = (state) => state.photoCollections.hasError;
export const pageSelector = (state) => state.photoCollections.page;
export const hasMoreSelector = (state) => state.photoCollections.hasMore;
export const totalPhotosSelector = (state) => state.photoCollections.total;
