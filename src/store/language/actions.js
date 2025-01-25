import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put, del } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { toast } from "react-toastify"

export const getLanguage = createAsyncThunk(
    "getLanguage",
    async ({ data, callback }, Thunk) => {
      try { 
        const queryParams = new URLSearchParams(data).toString();
        const url = `${URL.LANGUAGE_LIST}?${queryParams}`;
        let response = await get(url);
        callback && callback(null, response.data);
        return response;
      } catch (error) {
        console.log(error,"error======")
        return Thunk.rejectWithValue(error.response?.data || error);
      }
    }
  );

  export const AddLanguage = createAsyncThunk(
    "AddLanguage",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await post(URL.ADD_LANGUAGE, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  export const editLanguage= createAsyncThunk(
    "editLanguage",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await put(URL.EDIT_LANGUAGE + data?._id, data);
        callback && callback(null, response);
        console.log(response,"response===================<>")
        return response;
      } catch (error) {
        console.log(error,"=======================error")
        callback && callback(error.message,null);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  
  export const deleteLanguage = createAsyncThunk(
    "deleteLanguage",
    async ({ data, callback }, thunkAPI) => {
      console.log(data,"data++=++++++++++++++++++++")
      try {
        const response = await del(URL.DELETE_LANGUAGE + data);
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
  export const getAllLanguage = createAsyncThunk(
    "getAllLanguage",
    async ({ data, callback }, Thunk) => {
      try { 
        let response = await get(URL.ALL_LANGUAGE);
        callback && callback(null, response.data);
        return response;
      } catch (error) {
        console.log(error,"error======")
        return Thunk.rejectWithValue(error.response?.data || error);
      }
    }
  );