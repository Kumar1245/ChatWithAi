import { createAsyncThunk } from "@reduxjs/toolkit";

import * as URL from "../../helpers/url_helper";
import { get, put } from "../../helpers/api_helper";
export const getSettings = createAsyncThunk(
  "getSettings",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await get(URL.SETTING_VIEW, data);
      callback && callback(null, response.data);
      return response;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateSettings = createAsyncThunk(
  "updateSetting",
  async ({ data, callback }, Thunk) => {
    try {
      let payload = JSON.parse(JSON.stringify(data));
      delete payload._id;
      let response = await put(URL.EDIT_SETTING, data);
      callback && callback(null, response.data);
     
      return response.data;
    } catch (error) {
      callback && callback(error);
      return Thunk.rejectWithValue(error);
    }
  }
);