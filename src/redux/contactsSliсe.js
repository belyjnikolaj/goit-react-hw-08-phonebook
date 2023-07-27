import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from './auth/operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const handleFetchContacts = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items = action.payload;
};

const handleAddContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(action.payload);
};
const handleDeleteContact = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === action.payload.id);
  state.items.splice(index, 1);
};

const handleLogOut = state => {
  state.items = [];
  state.error = null;
  state.isLoading = false;
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleFetchContacts)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(logOut.fulfilled, handleLogOut),
});

export const contactsReducer = contactsSlice.reducer;
