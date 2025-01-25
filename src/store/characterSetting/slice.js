import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";
const initialState = {
  loading: false,
  CHARACTER: [],
  totalCount: 0,
};
const slice = createSlice({
  name: "CHARACTER",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getCharacter.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getCharacter.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      CHARACTER: payload || [], 
      totalCount: payload.totalcount || 0,
    }));
    builder.addCase(Act.getCharacter.rejected, (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload || 'Unknown error', 
      CHARACTER: [],
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
    builder.addCase(Act.AddCharacter.pending, (start, action) => ({
      ...start,
      loading: true,
    }));
    builder.addCase(Act.AddCharacter.fulfilled, (state, { payload }) => (
      console.log(payload),
      { 
      ...state,
      loading: false,
    }));
    builder.addCase(Act.AddCharacter.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
    // edit token package
    builder.addCase(Act.editCharacter.pending, (start, action) => ({
        ...start,
        loading: true,
      }));
      builder.addCase(Act.editCharacter.fulfilled, (state, { payload }) => (
        console.log(payload),
        {
          ...state,
          loading: false,
        }));
      builder.addCase(Act.editCharacter.rejected, (state, action) => ({
        ...state,
        loading: false,
      }));
    // delete token package
    builder.addCase(Act.deleteCharacter.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(Act.deleteCharacter.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(Act.deleteCharacter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export default slice;
