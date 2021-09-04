import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import app from './appReducers';
import homePage from './homePageReducer';
import collectionsPage from './collectionPageReducers';
import photoCollections from './photoCollectionsReducer';
import highlightCollections from './highlightReducer/highlightCollectionsReducer';
import highlightPhotos from './highlightReducer/highlightPhotosReducer';

const reducers = combineReducers({
	app,
	homePage,
	collectionsPage,
	photoCollections,
	highlightCollections,
	highlightPhotos,
});

export const store = createStore(reducers, applyMiddleware(thunk));
