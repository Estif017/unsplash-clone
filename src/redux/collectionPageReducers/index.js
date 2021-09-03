const initialState = {
	collections: [],
	isLoading: false,
	hasError: false,
	hasMore: true,
	page: 1,
};

export const GET_COLLECTIONS_PENDING = 'GET_COLLECTIONS_PENDING';
export const GET_COLLECTIONS_SUCCESS = 'GET_COLLECTIONS_SUCCESS';
export const GET_COLLECTIONS_FAIL = 'GET_COLLECTIONS_FAIL';
export const FETCH_COLLECTIONS_NEXT_PAGE = 'FETCH_COLLECTIONS_NEXT_PAGE';

const collectionsPageReducers = (state = initialState, action) => {
	switch (action.type) {
		case GET_COLLECTIONS_PENDING:
			return {
				...state,
				hasError: false,
				isLoading: true,
			};
		case GET_COLLECTIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				collections: [...state.collections, ...action.payload],
			};
		case GET_COLLECTIONS_FAIL:
			return {
				isLoading: false,
				hasError: true,
			};
		case FETCH_COLLECTIONS_NEXT_PAGE:
			return {
				...state,
				page: state.page + 1,
			};
		default:
			return state;
	}
};

export default collectionsPageReducers;

export const collectionsSelector = (state) => state.collectionsPage.collections;
export const loadingSelector = (state) => state.collectionsPage.isLoading;
export const errorSelector = (state) => state.collectionsPage.hasError;
export const pageSelector = (state) => state.collectionsPage.page;
export const hasMoreSelector = (state) => state.collectionsPage.hasMore;
