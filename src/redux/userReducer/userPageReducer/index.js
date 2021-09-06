const initialState = {
	userProfile: null,
	isLoading: false,
	hasError: false,
};

export const FETCH_USER_PROFILE_PENDING = 'FETCH_USER_PROFILE_PENDING';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAIL = 'FETCH_USER_PROFILE_FAIL';

const userPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_PROFILE_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case FETCH_USER_PROFILE_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				userProfile: action.payload,
			};
		case FETCH_USER_PROFILE_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		default:
			return state;
	}
};

export default userPageReducer;

export const userProfileSelector = (state) => state.userPage.userProfile;
export const loadingSelector = (state) => state.userPage.isLoading;
export const errorSelector = (state) => state.userPage.hasError;
