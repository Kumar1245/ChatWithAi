import { createSlice, current } from "@reduxjs/toolkit"

import * as Act from "./actions"

const initialState = {
  loading: false,
  settings:  null,

}

const slice = createSlice({
  name: "setting",
  initialState: { ...initialState },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(Act.getSettings.pending, (state, action) => ({
      ...state,
      loading: true,
    }))
    builder.addCase(Act.getSettings.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      settings: payload,

    }))
    builder.addCase(Act.getSettings.rejected, (state, action) => ({
      ...state,
      loading: false,
      settings: null,
    }))

    builder.addCase(Act.updateSettings.pending, (state, action) => ({
      ...state,
      loading: true,
    }))
    builder.addCase(Act.updateSettings.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      settings: payload,

    }))
    builder.addCase(Act.updateSettings.rejected, (state, action) => ({
      ...state,
      loading: false,
      settings: null,
    }))
  },
})

export default slice