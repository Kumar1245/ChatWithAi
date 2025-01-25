import { createSlice, current } from "@reduxjs/toolkit";

import * as Act from "./actions";

const initialState = {
  loading: false,
  profile: null,
};

const slice = createSlice({
  name: "profile",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.ProfileView.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.ProfileView.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      profile: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.ProfileView.rejected, (state, action) => ({
      ...state,
      loading: false,
      profile: [],
      totalCount: 0,
    }));
    builder.addCase(Act.updateProfile.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.updateProfile.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      profile: payload,
    }));
    builder.addCase(Act.updateProfile.rejected, (state, action) => ({
      ...state,
      loading: false,
      profile: null,
    }));
  },
});

export default slice;
