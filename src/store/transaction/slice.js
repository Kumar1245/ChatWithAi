import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  transaction: [],
  totalCount: 0,
};

const slice = createSlice({
  name: "transaction",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getTransaction.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getTransaction.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      transaction: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getTransaction.rejected, (state, action) => ({
      ...state,
      loading: false,
      transaction: [],
      totalCount: 0,
    }));
    // delete pages
    builder.addCase(Act.deleteTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(Act.deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(Act.deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || action.error;
      });
    //  // Case for viewing user  
    //  builder.addCase(Act.USER_PROFILE.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.USER_PROFILE.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   user: payload,
    // }));
    // builder.addCase(Act.USER_PROFILE.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   user: null,
    // }));
    // view user relative
    // builder.addCase(Act.USER_RELATIVE.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.USER_RELATIVE.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   // user: payload,
    // }));
    // builder.addCase(Act.USER_RELATIVE.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   user: null,
    // }));
    // user relative profile
    // builder.addCase(Act.USER_RELATIVE_PROFILE.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.USER_RELATIVE_PROFILE.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   user: payload,
    // }));
    // builder.addCase(Act.USER_RELATIVE_PROFILE.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   user: null,
    // }));
  },
});

export default slice;
