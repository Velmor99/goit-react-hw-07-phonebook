import { createSelector } from '@reduxjs/toolkit';

const getContacts = (state) => state.contacts.items;
const getShowNotify = (state) => state.contacts.emptyField;
const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.contacts.filter;
const getItemById = (state, id) => {
	const items = getContacts(state);
	return items.find((item) => item.id === id);
};

const getVisibleContacts = createSelector([ getContacts, getFilter ], (contacts, filtered) => {
	return contacts.filter((contact) => contact.name.toLowerCase().includes(filtered.toLowerCase()));
});

export default {
	getLoading,
	getFilter,
	getVisibleContacts,
    getItemById,
    getShowNotify
};
