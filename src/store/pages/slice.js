import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  pages: [],
  totalCount: 0,
};

const slice = createSlice({
  name: "pages",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getPages.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getPages.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      pages: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getPages.rejected, (state, action) => ({
      ...state,
      loading: false,
      pages: [],
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


    // //add user 
    builder.addCase(Act.AddPages.pending, (start, action) => ({
      ...start,
      loading: true,
    }));
    builder.addCase(Act.AddPages.fulfilled, (state, { payload }) => (
      console.log(payload),
      { 
      ...state,
      loading: false,
    }));
    builder.addCase(Act.AddPages.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
    // edit pages
    builder.addCase(Act.editPage.pending, (start, action) => ({
        ...start,
        loading: true,
      }));
      builder.addCase(Act.editPage.fulfilled, (state, { payload }) => (
        console.log(payload),
        {
          ...state,
          loading: false,
        }));
      builder.addCase(Act.editPage.rejected, (state, action) => ({
        ...state,
        loading: false,
      }));
    // delete pages
    builder.addCase(Act.deletePage.pending, (state) => {
        state.loading = true;
        state.error = null;
      });
      builder.addCase(Act.deletePage.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
      });
      builder.addCase(Act.deletePage.rejected, (state, action) => {
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
