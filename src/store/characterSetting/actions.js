import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put, del } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { toast } from "react-toastify"

export const getCharacter = createAsyncThunk(
    "getCharacter",
    async ({ data, callback }, Thunk) => {
      try { 
        const queryParams = new URLSearchParams(data).toString();
        // Append the query string to the base URL
        const url = `${URL.CHARACTER_SETTING}?${queryParams}`;
        let response = await get(url);
        callback && callback(null, response.data);
        return response;
      } catch (error) {
        console.log(error,"error======")
        return Thunk.rejectWithValue(error.response?.data || error);
      }
    }
  );

  export const AddCharacter = createAsyncThunk(
    "AddCharacter",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await post(URL.ADD_CHARACTER, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error?.data?.message || error.message || error);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  export const editCharacter= createAsyncThunk(
    "editCharacter",
    async ({ data, callback }, Thunk) => {
      try {
        let response = await put(URL.EDIT_CHARACTER + data?._id, data);
        callback && callback(null, response);
        return response;
      } catch (error) {
        callback && callback(error.message, null);
        return Thunk.rejectWithValue(error);
      }
    }
  );
  
  export const deleteCharacter = createAsyncThunk(
    "deleteCharacter",
    async ({ data, callback }, thunkAPI) => {
      console.log(data,"data++=++++++++++++++++++++")
      try {
        const response = await del(URL.DELETE_CHARACTER + data);
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