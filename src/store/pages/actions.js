import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put, del } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { toast } from "react-toastify"

export const getPages = createAsyncThunk(
    "getPages",
    async ({ data, callback }, Thunk) => {
      try {
        const queryParams = new URLSearchParams(data).toString();
        const url = `${URL.CONTENTPAGES}?${queryParams}`;
        let response = await get(url);
        callback && callback(null, response.data);
        return response;
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );

  export const AddPages = createAsyncThunk(
    "AddPages",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await post(URL.ADD_PAGES, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  export const editPage = createAsyncThunk(
    "editPage",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await put(URL.EDIT_PAGE + data?._id, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error.message, null);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  
  export const deletePage = createAsyncThunk(
    "deletePage",
    async ({ data, callback }, thunkAPI) => {
      console.log(data,"data++=++++++++++++++++++++")
      try {
        const response = await del(URL.DELETE_PAGES + data);
        console.log(data,"data----------->")
        callback && callback(null, response);
        return response;
      } catch (error) {
        toast.error(error?.message || "Something went wrong!")
  
        return thunkAPI.rejectWithValue(error);
      }
    }
  );