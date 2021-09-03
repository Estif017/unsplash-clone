const initialState = {
	photos: [],
	isLoading: false,
	hasError: false,
	page: 1,
	hasMore: true,
};

export const GET_PHOTOS_PENDING = 'GET_PHOTOS_PENDING';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAIL = 'GET_PHOTOS_FAIL';
export const FETCH_HOME_NEXT_PAGE = 'FETCH_HOME_NEXT_PAGE';

const homePageReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_PHOTOS_PENDING:
			return {
				...state,
				hasError: false,
				isLoading: true,
			};
		case GET_PHOTOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				photos: [...state.photos, ...action.payload],
			};
		case GET_PHOTOS_FAIL:
			return {
				isLoading: false,
				hasError: true,
			};
		case FETCH_HOME_NEXT_PAGE:
			return {
				...state,
				page: state.page + 1,
			};
		default:
			return state;
	}
};

export default homePageReducer;

export const photosSelector = (state) => state.homePage.photos;
export const loadingSelector = (state) => state.homePage.isLoading;
export const errorSelector = (state) => state.homePage.hasError;
export const pageSelector = (state) => state.homePage.page;
export const hasMoreSelector = (state) => state.homePage.hasMore;
