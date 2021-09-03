import {
	SAVE_PHOTO,
	TOGGLE_THEME,
	REMOVE_FROM_SAVED,
	SHOW_CAROUSEL,
	CLOSE_CAROUSEL,
	SAVE_COLLECTION,
	REMOVE_FROM_COLLECTION,
} from './index';

const setInStorage = (dataName, value) => {
	switch (dataName) {
		case 'savedPhotos':
			localStorage.setItem('savedPhotos', JSON.stringify(value));
			break;
		case 'savedCollections':
			localStorage.setItem('savedCollections', JSON.stringify(value));
			break;
		case 'theme':
			localStorage.setItem('theme', JSON.stringify(value));
			break;
		default:
			break;
	}
};

export const toggleTheme = (value) => {
	const isLightThemOn = !value;
	setInStorage('theme', isLightThemOn);
	return {
		type: TOGGLE_THEME,
		payload: isLightThemOn,
	};
};

export const addToPhotos = (photo) => (dispatch, getState) => {
	const state = getState();
	if (!state.app.savedPhotos.find((savedPhoto) => savedPhoto.id === photo.id)) {
		const newSavedPhotos = [...state.app.savedPhotos, photo];
		setInStorage('savedPhotos', newSavedPhotos);
		dispatch({
			type: SAVE_PHOTO,
			payload: newSavedPhotos,
		});
	}
};

export const removeFromSaved = (photo) => (dispatch, getState) => {
	const state = getState();
	const newSavedPhotos = state.app.savedPhotos.filter(
		(savedPhoto) => savedPhoto.id !== photo.id
	);
	setInStorage('savedPhotos', newSavedPhotos);
	dispatch({
		type: REMOVE_FROM_SAVED,
		payload: newSavedPhotos,
	});
};

export const addToCollections = (collection) => (dispatch, getState) => {
	const state = getState();
	if (
		!state.app.savedCollections.find(
			(savedCollection) => savedCollection.id === collection.id
		)
	) {
		const newSavedCollections = [...state.app.savedCollections, collection];
		setInStorage('savedCollections', newSavedCollections);
		dispatch({
			type: SAVE_COLLECTION,
			payload: newSavedCollections,
		});
	}
};

export const removeFromSavedCollection =
	(collection) => (dispatch, getState) => {
		const state = getState();
		const newSavedCollections = state.app.savedCollections.filter(
			(savedCollection) => savedCollection.id !== collection.id
		);
		setInStorage('savedCollections', newSavedCollections);
		dispatch({
			type: REMOVE_FROM_COLLECTION,
			payload: newSavedCollections,
		});
	};

export const showCarousel = (i) => ({
	type: SHOW_CAROUSEL,
	payload: i,
});

export const closeCarousel = () => ({
	type: CLOSE_CAROUSEL,
});
