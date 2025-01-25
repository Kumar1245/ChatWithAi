import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put, del } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { toast } from "react-toastify"

export const getFaq = createAsyncThunk(
    "getFaq",
    async ({ data, callback }, Thunk) => {
      try {


        const queryParams = new URLSearchParams(data).toString();
        // Append the query string to the base URL
        const url = `${URL.FAQ_LIST}?${queryParams}`;
        let response = await get(url);
        callback && callback(null, response.data);
        return response;
      } catch (error) {
        console.log(error,"error")
        return Thunk.rejectWithValue(error);
      }
    }
  );

  export const AddFaq = createAsyncThunk(
    "AddFaq",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await post(URL.ADD_FAQ, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  export const editFaq = createAsyncThunk(
    "editPage",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await put(URL.UPDATE_FAQ + data?._id, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error.message, null);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  
  export const deleteFaq = createAsyncThunk(
    "deletePage",
    async ({ data, callback }, thunkAPI) => {
      console.log(data,"data++=++++++++++++++++++++")
      try {
        const response = await del(URL.DELETE_FAQ + data);
        console.log(data,"data----------->")
        callback && callback(null, response);
        return response;
      } catch (error) {
        toast.error(error?.message || "Something went wrong!")
  
        return thunkAPI.rejectWithValue(error);
      }
    }
  );