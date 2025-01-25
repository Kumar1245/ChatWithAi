import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put, del } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { toast } from "react-toastify"

export const getTransaction = createAsyncThunk(
    "getTransaction",
    async ({ data, callback }, Thunk) => {
      try {
        const queryParams = new URLSearchParams(data).toString();
        const url = `${URL.TRANSACTION_LIST}?${queryParams}`;
        let response = await get(url);
        callback && callback(null, response.data);
        return response;
      } catch (error) {
        return Thunk.rejectWithValue(error);
      }
    }
  );


  
  export const deleteTransaction = createAsyncThunk(
    "deleteTransaction",
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