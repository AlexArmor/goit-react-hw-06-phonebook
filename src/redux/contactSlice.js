import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducer: {
    setContacts(state, { payload }) {
      return [...state, payload];
    },
    deleteContact(state, { payload }) {
      return state.filter(contact => contact.id !== payload);
    },
  },
});

export const { setContacts, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
