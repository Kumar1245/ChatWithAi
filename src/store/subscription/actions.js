import { createAsyncThunk } from "@reduxjs/toolkit";
import { post, get, put, del } from "../../helpers/api_helper";
import slice from "./slice";
import * as URL from "../../helpers/url_helper";
import { toast } from "react-toastify";

export const SUBSCRIPTIONLIST = createAsyncThunk(
  "SUBSCRIPTIONLIST",
  async ({ data, callback }, Thunk) => {
    console.log(data.language, "data in reducers");
    try {
      const queryParams = new URLSearchParams(data).toString();
      const url = `${URL.SUBSCRIPTION_LIST}?${queryParams}`;
      let response = await get(url);
      callback && callback(null, response);
      return response;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);
//payment  details api calling
export const SUBSCRIPTIONADD = createAsyncThunk(
  "SUBSCRIPTIONADD",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await post(URL.SUBSCRIPTION_ADD, data);
      callback && callback(null, response);
      return response;
    } catch (error) {
      callback && callback(error?.data?.message || error.message || error);
      return Thunk.rejectWithValue(error);
    }
  }
);
export const SUBSCRIPTIONDETAIL = createAsyncThunk(
  "SUBSCRIPTIONDETAIL",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await get(URL.SUBSCRIPTION_DETAIL + "/" + data);
      callback && callback(null, response);
      return response;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

// // delete marchant
export const deleteSubscription = createAsyncThunk(
  "deleteSubscription",
  async ({ data, callback }, thunkAPI) => {
    console.log(data,"data++=++++++++++++++++++++")
    try {
      const response = await del(URL.DELETE_SUBSCRIPTION + data);
      console.log(data,"data----------->")
      callback && callback(null, response);
      return response;
    } catch (error) {
      toast.error(error?.message || "Something went wrong!")
      callback && callback(error.message, null);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const EDITSUBSCRIPTION = createAsyncThunk(
  "EDITSUBSCRIPTION",
  async ({ data, callback }, Thunk) => {
    try {
      console.log(data,"data edit  actions")
      let payload = JSON.parse(JSON.stringify(data));
      delete payload.id;
      let response = await put(URL.EDIT_SUBSCRIPTION+data?.id, payload);
      callback && callback(null, response.data);
      return response;
    } catch (error) {
      toast.error(error?.message || "Something went wrong!")
      callback && callback(error?.data?.message || error.message || error);
      return Thunk.rejectWithValue(error);
    }
  }
);

// export const MARCHANQRTLIST = createAsyncThunk(
//   "MARCHANQRTLIST",
//   async ({ data, callback }, Thunk) => {
//     try {
//       let response = await post(data);
//       callback && callback(null, response);
//       return response;
//     } catch (error) {
//       return Thunk.rejectWithValue(error);
//     }
//   }
// );
// export const MerchantView = createAsyncThunk(
//   "MerchantView",
//   async ({ data, callback }, Thunk) => {
//     try {
//       let response = await get(data);
//       callback && callback(null, response);
//       return response;
//     } catch (error) {
//       return Thunk.rejectWithValue(error);
//     }
//   }
// );

// export const MarchantQRAdd = createAsyncThunk(
//   "MarchantQRAdd",
//   async ({ data, callback }, Thunk) => {
//     try {
//       let response = await post(data);
//       callback && callback(null, response);
//       return response;
//     } catch (error) {
//       callback && callback(error?.data?.message || error.message || error);
//       return Thunk.rejectWithValue(error);
//     }
//   }
// );
// export const deleteMarchantQr = createAsyncThunk(
//   "deleteMarchantQr",
//   async ({ data, callback }, thunkAPI) => {
//     console.log(data, "data++=++++++++++++++++++++");
//     try {
//       const response = await del(data);
//       console.log(data, "data----------->");
//       callback && callback(null, response);
//       return response;
//     } catch (error) {
//       callback && callback(error?.data?.message || error.message || error);
//       return thunkAPI.rejectWithValue(error);
//     }
//   }
// );

// export const { logoutUser } = slice.actions;
