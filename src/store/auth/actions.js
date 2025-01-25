import { createAsyncThunk } from "@reduxjs/toolkit"
import { post, get, put } from "../../helpers/api_helper"
import slice from "./slice"
import * as URL from "../../helpers/url_helper"
import { updateAdminToken } from "../../helpers/common"
import { toast } from "react-toastify"
export const loginUser = createAsyncThunk(
  "admin/login",
  async ({ data, callBack }, Thunk) => {
    console.log(data,"data========login<>")
    try {
      let response = await post(URL.LOGIN_USER, data)
      updateAdminToken(response.data.token)
      localStorage.setItem("authUser", JSON.stringify(response.data?.user))
      localStorage.setItem("authToken", response?.data?.token)
      callBack && callBack(null, response)
      return response
    } 
    catch (error) {
      console.log(error, "<===error")
      toast.error("Invalid credentials!")
      callBack && callBack(error)
      return Thunk.rejectWithValue(error)
    }
  }
)

export const viewUser = createAsyncThunk(
  "admin/view",
  async (payload, Thunk) => {
    try {
      let response = await get(URL.VIEW_USER)
      return response.data
    } catch (error) {
      return Thunk.rejectWithValue(error)
    }
  }
)

export const updateAdmin = createAsyncThunk(
  "admin/edit/",
  async ({ data, callBack }, Thunk) => {
    try {
      let response = await put(URL.UPDATE_ADMIN , data)
      callBack && callBack(null, response)
      return response
    } catch (error) {
      callBack(error.message)
      return Thunk.rejectWithValue(error)
    }
  }
)

export const resetPass = createAsyncThunk(
  "admin/reset",
  async ({ data, callBack }, Thunk) => {
    try {
      let response = await put(URL.RESET_PASSWORD + data?._id, data)
      callBack(null, response)
      return response.data
    } catch (error) {
      callBack(error.message)
      return Thunk.rejectWithValue(error)
    }
  }
)
export const ChangePassword = createAsyncThunk(
  "ChangePassword",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await put(URL.CHANGE_PASSWORD, data);
      callback && callback(null, response);
      return response
    } catch (error) {
      callback && callback(error?.data?.message || error.message || error);
      return Thunk.rejectWithValue(error);
    }
  }
);

export const uploadFile = createAsyncThunk(
  "uploadFile",
  async ({ data, callback }, Thunk) => {
    try { 
      const formData = new FormData()
      formData.append("file", data)
      const config = {
        headers: { "content-type": "multipart/form-data" },
      }
      let response = await post(URL.POST_FILE, formData, config);
      console.log(response, "resposne");
      callback && callback(null, response)
      return response.data
    } 
    catch (error) {
      console.log("error", error);
      callback(error.message)
      return Thunk.rejectWithValue(error)
    }
  }
)

export const { logoutUser } = slice.actions