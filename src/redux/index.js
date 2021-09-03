import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import app from './appReducers';

const reducers = combineReducers({
	app,
});

export const store = createStore(reducers, applyMiddleware(thunk));
