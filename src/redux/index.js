import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import app from './appReducers';
import homePage from './homePageReducer';
import collectionsPage from './collectionPageReducers';
import photoCollections from './photoCollectionsReducer';
import highlightCollections from './highlightReducer/highlightCollectionsReducer';
import highlightPhotos from './highlightReducer/highlightPhotosReducer';
import userPage from './userReducer/userPageReducer';
import userPost from './userReducer/userPostReducer';
import searchCollections from './searchReducers/searchCollectionsReducer';
import searchPhotos from './searchReducers/searchPhotosReducer';
import searchUsers from './searchReducers/searchUsersReducer';

const reducers = combineReducers({
	app,
	homePage,
	collectionsPage,
	photoCollections,
	highlightCollections,
	highlightPhotos,
	userPage,
	userPost,
	searchCollections,
	searchPhotos,
	searchUsers,
});

export const store = createStore(reducers, applyMiddleware(thunk));
