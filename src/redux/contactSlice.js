import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducer: {
    addContacts(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
