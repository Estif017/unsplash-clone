const initialState = {
	photos: [],
	isLoading: false,
	hasError: false,
	hasMore: true,
	page: 1,
};

export const GET_USER_PHOTOS_PENDING = 'GET_USER_PHOTOS_PENDING';
export const GET_USER_PHOTOS_SUCCESS = 'GET_USER_PHOTOS_SUCCESS';
export const GET_USER_PHOTOS_FAIL = 'GET_USER_PHOTOS_FAIL';
export const FETCH_MORE_USER_PHOTOS = 'FETCH_MORE_USER_PHOTOS';
export const FETCHING_USER_PHOTOS_DONE = 'FETCHING_USER_PHOTOS_DONE';
export const RESET_USER_PAGE = 'RESET_USER_PAGE';

const userPostReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_PHOTOS_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case GET_USER_PHOTOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				photos: [...state.photos, ...action.payload],
			};
		case GET_USER_PHOTOS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		case FETCH_MORE_USER_PHOTOS:
			return {
				...state,
				page: state.page + 1,
			};
		case FETCHING_USER_PHOTOS_DONE:
			return {
				isLoading: false,
				hasError: false,
				hasMore: false,
			};
		case RESET_USER_PAGE:
			return {
				photos: [],
				isLoading: false,
				hasError: false,
				hasMore: true,
				page: 1,
			};
		default:
			return state;
	}
};

export default userPostReducer;

export const userPhotosSelector = (state) => state.userPost.photos;
export const loadingSelector = (state) => state.userPost.isLoading;
export const errorSelector = (state) => state.userPost.hasError;
export const hasMoreSelector = (state) => state.userPost.hasMore;
export const pageSelector = (state) => state.userPost.page;
