import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "assignments",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
});

export default slice.reducer;