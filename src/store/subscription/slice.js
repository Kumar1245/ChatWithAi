import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  subscription: [],
  totalCount: 0,
};

const slice = createSlice({
  name: "subscription",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.SUBSCRIPTIONLIST.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.SUBSCRIPTIONLIST.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      subscription: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.SUBSCRIPTIONLIST.rejected, (state, action) => ({
      ...state,
      loading: false,
      subscription: null,
    }));
    // ADD SUBSCRIPTION
    builder.addCase(Act.SUBSCRIPTIONADD.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.SUBSCRIPTIONADD.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      marchant: payload,
    }));
    builder.addCase(Act.SUBSCRIPTIONADD.rejected, (state, action) => ({
      ...state,
      loading: false,
      marchant: null,
    }));
    // SUBSCRIPTION view deatils
    builder.addCase(Act.SUBSCRIPTIONDETAIL.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.SUBSCRIPTIONDETAIL.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      marchant: payload,
    }));
    builder.addCase(Act.SUBSCRIPTIONDETAIL.rejected, (state, action) => ({
      ...state,
      loading: false,
      marchant: null,
    }));
    // //   // delete Qr price
    // builder.addCase(Act.deleteMarchant.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // });
    // builder.addCase(Act.deleteMarchant.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    // });
    // builder.addCase(Act.deleteMarchant.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message || action.error;
    // });
    // // marchant delete qr
    builder.addCase(Act.deleteSubscription.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(Act.deleteSubscription.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(Act.deleteSubscription.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.error;
    });

    //   deleteMarchantQr  // edit
    builder.addCase(Act.EDITSUBSCRIPTION.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(Act.EDITSUBSCRIPTION.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(Act.EDITSUBSCRIPTION.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || action.error;
    });

    // // marchant view deatils
    // builder.addCase(Act.SUBSCRIPTIONDETAIL.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.SUBSCRIPTIONDETAIL.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   marchant: payload,
    // }));
    // builder.addCase(Act.SUBSCRIPTIONDETAIL.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   marchant: null,
    // }));

    // // marchant qr add
    // builder.addCase(Act.MarchantQRAdd.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.MarchantQRAdd.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   marchant: payload,
    // }));
    // builder.addCase(Act.MarchantQRAdd.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   marchant: null,
    // }));
  },
});

export default slice;
