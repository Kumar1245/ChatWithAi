import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { toast } from "react-toastify"

export const updateProfile = createAsyncThunk(
    "updateProfile",
    async ({ data, callback }, Thunk) => {
      try {
        // let payload = JSON.parse(JSON.stringify(data));
        // delete payload._id;
        let response = await put(URL.UPDATE_ADMIN, data);
        callback && callback(null, response);
        return response
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  export const ProfileView = createAsyncThunk(
    "ProfileView",
    async ({ data, callback }, Thunk) => {
      try {
        // let payload = JSON.parse(JSON.stringify(data));
        // delete payload._id;
        let response = await get(URL.PROFILE_VIEWS, data);
        callback && callback(null, response);
        return response
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );
