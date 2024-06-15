import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: { name: "", number: "" },
  reducers: {
    ChangeFilter(state, action) {
      state.name = action.payload;
      state.number = action.payload;
    },
  },
});

export const { ChangeFilter } = filterSlice.actions;
export default filterSlice.reducer;
