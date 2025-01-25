import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  TOKEN: [],
  totalCount: 0,
};

const slice = createSlice({
  name: "FAQ",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getToken.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getToken.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      TOKEN: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getToken.rejected, (state, action) => ({
      ...state,
      loading: false,
      TOKEN: [],
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
    builder.addCase(Act.AddTokenPackage.pending, (start, action) => ({
      ...start,
      loading: true,
    }));
    builder.addCase(Act.AddTokenPackage.fulfilled, (state, { payload }) => (
      console.log(payload),
      { 
      ...state,
      loading: false,
    }));
    builder.addCase(Act.AddTokenPackage.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
    // edit token package
    builder.addCase(Act.editTokenPackage.pending, (start, action) => ({
        ...start,
        loading: true,
      }));
      builder.addCase(Act.editTokenPackage.fulfilled, (state, { payload }) => (
        console.log(payload),
        {
          ...state,
          loading: false,
        }));
      builder.addCase(Act.editTokenPackage.rejected, (state, action) => ({
        ...state,
        loading: false,
      }));
    // delete token package
    builder.addCase(Act.deleteTOKENPackage.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(Act.deleteTOKENPackage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(Act.deleteTOKENPackage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
  },
});

export default slice;
