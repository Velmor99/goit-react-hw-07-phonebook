import { combineReducers } from 'redux';
import { FILTER } from '../actionTypes';
import { createReducer } from '@reduxjs/toolkit';
import contactsActions from '../contacts/contactActions';

const itemsTestReducer = createReducer([], {
	[contactsActions.addContactsSuccess]: (state, action) => action.payload.name === '' || action.payload.number === '' ? (state) : [ ...state, action.payload],
	[contactsActions.getContactsSuccess]: (state, action) => action.payload,
	[contactsActions.removeContactsSuccess]: (state, action) => state.filter((contact) => contact.id !== action.payload)
});


const filter = createReducer('', {
	[FILTER]: (state, action) => action.payload
});

const loading = createReducer(false, {
	[contactsActions.getContactsRequest]: (state, action) => true,
	[contactsActions.getContactsSuccess]: (state, action) => false,
	[contactsActions.getContactsSuccess]: (state, action) => false,
	[contactsActions.addContactsRequest]: (state, action) => true,
	[contactsActions.addContactsSuccess]: (state, action) => false,
	[contactsActions.addContactsError]: (state, action) => false,
})

const emptyField = createReducer(false, {
	[contactsActions.showNotifyTrue]: (state, action) => true,
	[contactsActions.showNotifyFalse]: (state, action) => false,
})

export default combineReducers({
	items: itemsTestReducer,
	filter,
	loading,
	emptyField
});
