const initialState = {
	on: JSON.parse(localStorage.getItem('theme')) || true,
	savedPhotos: JSON.parse(localStorage.getItem('savedPhotos')) || {},
	savedCollections: JSON.parse(localStorage.getItem('savedCollections')) || {},
	display: false,
	index: -1,
};

export const TOGGLE_THEME = 'TOGGLE_THEME';
export const SAVE_PHOTO = 'SAVE_PHOTO';
export const SAVE_COLLECTION = 'SAVE_COLLECTION';
export const REMOVE_FROM_SAVED = 'REMOVE_FROM_SAVED';
export const REMOVE_FROM_COLLECTION = 'REMOVE_FROM_COLLECTION';
export const SHOW_CAROUSEL = 'SHOW_CAROUSEL';
export const CLOSE_CAROUSEL = 'CLOSE_CAROUSEL';

const appReducers = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			return {
				...state,
				on: action.payload,
			};
		case SAVE_PHOTO:
		case REMOVE_FROM_SAVED:
			return {
				...state,
				savedPhotos: action.payload,
			};
		case SAVE_COLLECTION:
		case REMOVE_FROM_COLLECTION:
			return {
				...state,
				savedCollections: action.payload,
			};
		case SHOW_CAROUSEL:
			return {
				...state,
				index: action.payload,
				display: true,
			};
		case CLOSE_CAROUSEL:
			return {
				...state,
				index: -1,
				display: false,
			};
		default:
			return state;
	}
};

export default appReducers;

export const onSelector = (state) => state.app.on;
export const SavedPhotosSelector = (state) => state.app.savedPhotos;
export const displaySelector = (state) => state.app.display;
export const indexSelector = (state) => state.app.index;
export const savedCollectionsSelector = (state) => state.app.savedCollections;
