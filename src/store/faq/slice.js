import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  FAQ: [],
  totalCount: 0,
};

const slice = createSlice({
  name: "FAQ",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getFaq.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getFaq.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      FAQ: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getFaq.rejected, (state, action) => ({
      ...state,
      loading: false,
      FAQ: [],
      totalCount: 0,
    }));
    // //add user 
    builder.addCase(Act.AddFaq.pending, (start, action) => ({
      ...start,
      loading: true,
    }));
    builder.addCase(Act.AddFaq.fulfilled, (state, { payload }) => (
      console.log(payload),
      { 
      ...state,
      loading: false,
    }));
    builder.addCase(Act.AddFaq.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
    // edit pages
    builder.addCase(Act.editFaq.pending, (start, action) => ({
        ...start,
        loading: true,
      }));
      builder.addCase(Act.editFaq.fulfilled, (state, { payload }) => (
        console.log(payload),
        {
          ...state,
          loading: false,
        }));
      builder.addCase(Act.editFaq.rejected, (state, action) => ({
        ...state,
        loading: false,
      }));
    // delete pages
    builder.addCase(Act.deleteFaq.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(Act.deleteFaq.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(Act.deleteFaq.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export default slice;
