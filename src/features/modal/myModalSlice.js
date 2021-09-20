import { createSlice } from "@reduxjs/toolkit";

export const myModalSlice = createSlice({
  name: "myModal",
  initialState: {
    showModal: false,
  },
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
  },
});
export const { setShowModal } = myModalSlice.actions;
export const selectShowModal = (state) => state.myModal.showModal;

export default myModalSlice.reducer;
