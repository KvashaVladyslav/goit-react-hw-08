import { createSlice } from "@reduxjs/toolkit";

const modalWindowSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    contactId: null,
  },
  reducers: {
    openModal(state, action) {
      state.isModalOpen = true;
      state.contactId = action.payload;
    },
    closeModal(state) {
      state.isModalOpen = false;
      state.contactId = null;
    },
  },
});

export const { openModal, closeModal } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
