import {
	SHOW_HIGHLIGHT_PHOTOS,
	CLOSE_HIGHLIGHT_PHOTOS,
	SHOW_SEARCH_COLLECTIONS_FORM,
} from './index';

export const showHighlightPhotos = (id) => ({
	type: SHOW_HIGHLIGHT_PHOTOS,
	payload: id,
});

export const closeHighlightPhotos = () => ({
	type: CLOSE_HIGHLIGHT_PHOTOS,
});

export const showSearchCollectionsForm = () => ({
	type: SHOW_SEARCH_COLLECTIONS_FORM,
});
