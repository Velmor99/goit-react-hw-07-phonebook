import contactsActions from '../contacts/contactActions';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:2000";

const addContact = (name, number) => dispatch => {
  dispatch(contactsActions.addContactsRequest());

  if(name === "" || number === "") {
   dispatch(contactsActions.addContactsError())
   dispatch(contactsActions.showNotifyTrue(true))
   return setTimeout(() => dispatch(contactsActions.showNotifyFalse(false)), 1500);
  }else {
    axios.post("/contacts", {name, number})
    .then(response => {
      console.log(response);
      dispatch(contactsActions.addContactsSuccess(response.data));
    })
    .catch(error => dispatch(contactsActions.addContactsError(error)))
  }
  
};

const getContact = () => dispatch => {
    dispatch(contactsActions.getContactsRequest())

    axios.get("/contacts")
    .then(response => dispatch(contactsActions.getContactsSuccess(response.data)))
    .catch(error => dispatch(contactsActions.getContactsError(error)))
}

const removeContact = id => dispatch => {
    dispatch(contactsActions.removeContactsRequest());

    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(contactsActions.removeContactsSuccess(id)))
    .catch(error => dispatch(contactsActions.removeContactsError(error)))
}


export default {
    addContact,
    getContact,
    removeContact,
}