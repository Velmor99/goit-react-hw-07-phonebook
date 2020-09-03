import { FILTER } from '../actionTypes';
import { createAction } from '@reduxjs/toolkit';

//экшены для асинхронной операии
const addContactsRequest = createAction('contacts/addRequest');
const addContactsSuccess = createAction('contacts/successRequest');
const addContactsError = createAction('contacts/errorRequest');

const getContactsRequest = createAction('contact/addRequest');
const getContactsSuccess = createAction('contact/successRequest');
const getContactsError = createAction('contact/errorRequest');

const removeContactsRequest = createAction('remove/addRequest');
const removeContactsSuccess = createAction('remove/successRequest');
const removeContactsError = createAction('remove/errorRequest');

const showNotifyToggle = createAction('show/notifyShow')
const showNotifyTrue = createAction('show/trueNotify')
const showNotifyFalse = createAction('show/falseNotify')
/************************************************************************/ 


const changeFilter = createAction(FILTER);

export default {
	removeContactsRequest,
	removeContactsSuccess,
	removeContactsError,
	addContactsRequest,
	addContactsSuccess,
	addContactsError,
	getContactsRequest,
	getContactsSuccess,
	getContactsError,
	changeFilter,
	showNotifyToggle,
	showNotifyTrue,
	showNotifyFalse,
	};
