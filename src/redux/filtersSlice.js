import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: {
    ChangeFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const selectNameFilter = (state) => state.filters.name;
export const { ChangeFilter } = filterSlice.actions;
export default filterSlice.reducer;
