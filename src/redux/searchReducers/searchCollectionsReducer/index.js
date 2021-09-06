const initialState = {
	collections: [],
	isLoading: false,
	hasError: false,
	hasMore: true,
	total: 0,
	page: 1,
};

export const SEARCH_COLLECTIONS_PENDING = 'SEARCH_COLLECTIONS_PENDING';
export const SEARCH_COLLECTIONS_SUCCESS = 'SEARCH_COLLECTIONS_SUCCESS';
export const SEARCH_COLLECTIONS_FAIL = 'SEARCH_COLLECTIONS_FAIL';
export const DONE_SEARCHING_COLLECTIONS = 'DONE_SEARCHING_COLLECTIONS';
export const RESET_SEARCH_COLLECTIONS = 'RESET_SEARCH_COLLECTIONS';

const searchCollectionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_COLLECTIONS_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case SEARCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isLoading: false,
				collections: [...state.collections, ...action.payload.results],
				total: action.payload.total,
				page: state.page + 1,
				hasError: false,
			};
		case SEARCH_COLLECTIONS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		case DONE_SEARCHING_COLLECTIONS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				hasMore: false,
			};
		case RESET_SEARCH_COLLECTIONS:
			return {
				collections: [],
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
export default searchCollectionsReducer;

export const searchCollectionSelector = (state) =>
	state.searchCollections.collections;
export const loadingSelector = (state) => state.searchCollections.isLoading;
export const errorSelector = (state) => state.searchCollections.hasError;
export const hasMoreSelector = (state) => state.searchCollections.hasMore;
export const totalSelector = (state) => state.searchCollections.total;
export const pageSelector = (state) => state.searchCollections.page;
