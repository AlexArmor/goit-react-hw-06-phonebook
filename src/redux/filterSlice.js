import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterContacts(state, { payload }) {
      return state.filter(contact =>
        contact.name.toLowerCase().includes(payload.toLowerCase().trim())
      );
    },
  },
});
export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
