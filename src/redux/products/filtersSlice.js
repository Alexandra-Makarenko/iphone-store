import { createSlice } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

const filtersInitialState = {
  status: statusFilters.sortByPopularUp,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setProductsFilter(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProductsFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
