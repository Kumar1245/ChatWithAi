import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";
const initialState = {
  loading: false,
  LANGUAGE: [],
  totalCount: 0,
};
const slice = createSlice({
  name: "LANGUAGE",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getLanguage.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getLanguage.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      LANGUAGE: payload || [], 
      totalCount: payload.totalcount || 0,
    }));
    builder.addCase(Act.getLanguage.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload || 'Unknown error', 
      LANGUAGE: [],
      totalCount: 0,
    }));

    ///change users status
    // builder.addCase(Act.updateUser.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.updateUser.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    // }));
    // builder.addCase(Act.updateUser.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    // }));
    // //add token package
    builder.addCase(Act.AddLanguage.pending, (start, action) => ({
      ...start,
      loading: true,
    }));
    builder.addCase(Act.AddLanguage.fulfilled, (state, { payload }) => (
      console.log(payload),
      { 
      ...state,
      loading: false,
    }));
    builder.addCase(Act.AddLanguage.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
    // edit token package
    builder.addCase(Act.editLanguage.pending, (start, action) => ({
        ...start,
        loading: true,
      }));
      builder.addCase(Act.editLanguage.fulfilled, (state, { payload }) => (
        console.log(payload),
        {
          ...state,
          loading: false,
        }));
      builder.addCase(Act.editLanguage.rejected, (state, action) => ({
        ...state,
        loading: false,
      }));
    // delete token package
    builder.addCase(Act.deleteLanguage.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(Act.deleteLanguage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(Act.deleteLanguage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export default slice;
