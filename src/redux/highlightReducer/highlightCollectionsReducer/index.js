const initialState = {
	display: false,
	formDisplay: false,
	id: null,
};

export const SHOW_HIGHLIGHT_PHOTOS = 'SHOW_HIGHLIGHT_PHOTOS';
export const CLOSE_HIGHLIGHT_PHOTOS = 'CLOSE_HIGHLIGHT_PHOTOS';
export const SHOW_SEARCH_COLLECTIONS_FORM = 'SHOW_SEARCH_COLLECTIONS_FORM';

const highlightCollectionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_HIGHLIGHT_PHOTOS:
			return {
				...state,
				display: true,
				id: action.payload,
			};
		case CLOSE_HIGHLIGHT_PHOTOS:
			return {
				display: false,
				formDisplay: false,
				id: null,
			};
		case SHOW_SEARCH_COLLECTIONS_FORM:
			return {
				...state,
				formDisplay: true,
			};
		default:
			return state;
	}
};

export default highlightCollectionsReducer;

export const displaySelector = (state) => state.highlightCollections.display;
export const formDisplaySelector = (state) =>
	state.highlightCollections.formDisplay;
export const idSelector = (state) => state.highlightCollections.id;
