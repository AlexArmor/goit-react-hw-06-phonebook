import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = { items: [] };

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducer: {
    addContacts(state, { payload }) {
      state.items = [...state.items, payload];
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContacts, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
