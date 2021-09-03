import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import app from './appReducers';
import homePage from './homePageReducer';
import collectionsPage from './collectionPageReducers';
import photoCollections from './photoCollectionsReducer';

const reducers = combineReducers({
	app,
	homePage,
	collectionsPage,
	photoCollections,
});

export const store = createStore(reducers, applyMiddleware(thunk));
