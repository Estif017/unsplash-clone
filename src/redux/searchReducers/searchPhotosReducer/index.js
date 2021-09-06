const initialState = {
	photos: [],
	isLoading: false,
	hasError: false,
	hasMore: true,
	total: 0,
	page: 1,
};

export const SEARCH_PHOTOS_PENDING = 'SEARCH_PHOTOS_PENDING';
export const SEARCH_PHOTOS_SUCCESS = 'SEARCH_PHOTOS_SUCCESS';
export const SEARCH_PHOTOS_FAIL = 'SEARCH_PHOTOS_FAIL';
export const DONE_SEARCHING_PHOTOS = 'DONE_SEARCHING_PHOTOS';
export const RESET_SEARCH_PHOTOS = 'RESET_SEARCH_PHOTOS';

const searchPhotosReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_PHOTOS_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case SEARCH_PHOTOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				photos: [...state.photos, ...action.payload.results],
				total: action.payload.total,
				page: state.page + 1,
				hasError: false,
			};
		case SEARCH_PHOTOS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		case DONE_SEARCHING_PHOTOS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				hasMore: false,
			};
		case RESET_SEARCH_PHOTOS:
			return {
				photos: [],
				isLoading: false,
				hasError: false,
				hasMore: true,
				total: 0,
				page: 1,
			};
		default:
			return state;
	}
};
export default searchPhotosReducer;

export const searchPhotosSelector = (state) => state.searchPhotos.photos;
export const loadingSelector = (state) => state.searchPhotos.isLoading;
export const errorSelector = (state) => state.searchPhotos.hasError;
export const hasMoreSelector = (state) => state.searchPhotos.hasMore;
export const totalSelector = (state) => state.searchPhotos.total;
export const pageSelector = (state) => state.searchPhotos.page;
