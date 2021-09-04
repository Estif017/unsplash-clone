const initialState = {
	photos: [],
	isLoading: false,
	hasError: false,
};

export const GET_hIGHLIGHT_PHOTOS_PENDING = 'GET_hIGHLIGHT_PHOTOS_PENDING';
export const GET_hIGHLIGHT_PHOTOS_SUCCESS = 'GET_hIGHLIGHT_PHOTOS_SUCCESS';
export const GET_hIGHLIGHT_PHOTOS_FAIL = 'GET_hIGHLIGHT_PHOTOS_PENDING';

const highlightPhotosReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_hIGHLIGHT_PHOTOS_PENDING:
			return {
				...state,
				isLoading: true,
				hasError: false,
			};
		case GET_hIGHLIGHT_PHOTOS_SUCCESS:
			return {
				...state,
				isLoading: false,
				hasError: false,
				photos: [...state.photos, ...action.payload],
			};
		case GET_hIGHLIGHT_PHOTOS_FAIL:
			return {
				...state,
				isLoading: false,
				hasError: true,
			};
		default:
			return state;
	}
};

export default highlightPhotosReducer;

export const photosSelector = (state) => state.highlightPhotos.photos;
export const loadingSelector = (state) => state.highlightPhotos.isLoading;
export const errorSelector = (state) => state.highlightPhotos.hasError;
