import { combineReducers } from 'redux';
import contactsReducer from './reducers/contactsReducers';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

const defaultMiddleWare = getDefaultMiddleware()

const rootReducer = combineReducers({
	contacts: contactsReducer
});

const store = configureStore({
	reducer: rootReducer,
	middleware: [...defaultMiddleWare, ] 
});

export default store;
