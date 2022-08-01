import { createSlice } from '@reduxjs/toolkit';

const initPhoneBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: initPhoneBook, filter: '' },
  reducers: {
    addNewContact: (state, action) => {
      state.items.push(action.payload);
    },

    filteredContacts: (state, action) => {
      state.filter = action.payload;
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const { addNewContact, filteredContacts, deleteContact } =
  contactsSlice.actions;

// export const addNewContact = createAction('contacts/addNewContact');
// export const filteredContacts = createAction('contacts/filteredContacts');
// export const deleteContact = createAction('contacts/deleteContact');

// const contactsReducer = createReducer(
//   { items: initPhoneBook, filter: '' },
//   {
//     [addNewContact]: (state, action) => {
//       state.items.push(action.payload);
//     },

//     [filteredContacts]: (state, action) => {
//       state.filter = action.payload;
//     },

//     [deleteContact]: (state, action) => {
//       state.items = state.items.filter(({ id }) => id !== action.payload);
//     },
//   }
// );
