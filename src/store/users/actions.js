import { createAsyncThunk } from "@reduxjs/toolkit";

import * as URL from "../../helpers/url_helper";

import { get, post, put } from "../../helpers/api_helper";

export const getUsers = createAsyncThunk(
  "getUsers",
  async ({ data, callback }, Thunk) => {
    try {
      const queryParams = new URLSearchParams(data).toString();
      const url = `${URL.USER_LIST}?${queryParams}`;
      let response = await get(url);
      callback && callback(null, response.data);
      return response;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

//userdetails api calling
export const USER_PROFILE = createAsyncThunk(
  "USER_PROFILE",
  async ({ data, callback }, Thunk) => {
    try {
      //   let response = await get(URL.USER_PROFILE + data);
      callback && callback(null, response.data);
      return response;
    } catch (error) {
      return Thunk.rejectWithValue(error);
    }
  }
);

export const updateUser = createAsyncThunk(
  "updateUser",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await put(URL.UPDATE_USER + data?._id, data);
      callback && callback(null, response.data);
      return response;
    } catch (error) {
      callback && callback(error?.data?.message || error.message || error);
      return Thunk.rejectWithValue(error);
    }
  }
);

export const AddUser = createAsyncThunk(
  "AddUser",
  async ({ data, callback }, Thunk) => {
    try {
      //   let response = await post(URL.ADD_USER, data);
      callback && callback(null, response);
      return response;
    } catch (error) {
      callback && callback(error?.data?.message || error.message || error);
      return Thunk.rejectWithValue(error);
    }
  }
);
export const getUserDetails = createAsyncThunk(
  "getUserDetails",
  async ({ data, callback }, Thunk) => {
    try {
      let response = await get(URL.USER_VIEW + data);
      callback && callback(null, response.data);
      return response;
    } catch (error) {
      console.log(error);
      
      return Thunk.rejectWithValue(error);
    }
  }
);
export const getUserPrivateCharacter = createAsyncThunk(
  "getUserPrivateCharacter",
  async ({ data, callback }, Thunk) => {
    try {
      // Extract id from data
      const { id, ...queryData } = data;
      // Build query string without the id
      const queryParams = new URLSearchParams(queryData).toString();
      // Construct the URL with id in the route and queryParams
      const url = `${URL.USER_PRIVATE_CHARACTER}${id}?${queryParams}`;
      // Make the API call
      const response = await get(url);
      // Invoke callback if provided
      callback && callback(null, response.data);
      // Return response
      return response;
    } catch (error) {
      // Handle errors
      return Thunk.rejectWithValue(error);
    }
  }
);

export const getUsersSubscription = createAsyncThunk(
  "getUsersSubscription",
  async ({ data, callback }, Thunk) => {
    try {
      // Extract id from data
      const { id, ...queryData } = data;
      // Build query string without the id
      const queryParams = new URLSearchParams(queryData).toString();
      // Construct the URL with id in the route and queryParams
      const url = `${URL.USER_SUBSCRIPTION}${id}?${queryParams}`;
      // Make the API call
      const response = await get(url);
      // Invoke callback if provided
      callback && callback(null, response.data);
      // Return response
      return response;
    } catch (error) {
      // Handle errors
      return Thunk.rejectWithValue(error);
    }
  }
);
export const getUsersToken = createAsyncThunk(
  "getUsersToken",
  async ({ data, callback }, Thunk) => {
    try {
      // Extract id from data
      const { id, ...queryData } = data;
      // Build query string without the id
      const queryParams = new URLSearchParams(queryData).toString();
      // Construct the URL with id in the route and queryParams
      const url = `${URL.USER_TOKEN}${id}?${queryParams}`;
      // Make the API call
      const response = await get(url);
      // Invoke callback if provided
      callback && callback(null, response.data);
      // Return response
      return response;
    } catch (error) {
      // Handle errors
      return Thunk.rejectWithValue(error);
    }
  }
);
