const initialState = {
	users: [],
	isLoading: false,
	hasError: false,
	hasMore: true,
	total: 0,
	page: 1,
};

export const SEARCH_USERS_PENDING = 'SEARCH_USERS_PENDING';
export const SEARCH_USERS_SUCCESS = 'SEARCH_USERS_SUCCESS';
export const SEARCH_USERS_FAIL = 'SEARCH_USERS_FAIL';
export const DONE_SEARCHING_USERS = 'DONE_SEARCHING_USERS';
export const RESET_SEARCH_USERS = 'RESET_SEARCH_USERS';

const searchUsersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_USERS_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case SEARCH_USERS_SUCCESS:
			return {
				...state,
				isLoading: false,
				users: [...state.users, ...action.payload.results],
				total: action.payload.total,
				page: state.page + 1,
				hasError: false,
			};
		case SEARCH_USERS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		case DONE_SEARCHING_USERS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				hasMore: false,
			};
		case RESET_SEARCH_USERS:
			return {
				users: [],
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
export default searchUsersReducer;

export const searchUsersSelector = (state) => state.searchUsers.users;
export const loadingSelector = (state) => state.searchUsers.isLoading;
export const errorSelector = (state) => state.searchUsers.hasError;
export const hasMoreSelector = (state) => state.searchUsers.hasMore;
export const totalSelector = (state) => state.searchUsers.total;
export const pageSelector = (state) => state.searchUsers.page;
