import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";
const data = JSON.parse(localStorage.getItem("authUser") || null);

const initialState = {
  user: data || null,
  authToken: data?.authToken || null,
  signupuser: null,
  forgetpass: null,
  isAuthenticated: false,
  routeType: null,
  loading: false,
  uploadFilerLoader :false
};

const slice = createSlice({
  name: "auth",
  initialState: { ...initialState },
  reducers: {
    logoutUser: (state, action) => {
      return { ...initialState, user: null, authToken: null };
    },
    setRouteType: (state, action) => {
      state.routeType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(Act.loginUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Act.loginUser.fulfilled, (state, action) => {
      state.user = action.payload.data;
      state.authToken = action.payload.data.token;
      state.loading = false;
    });
    builder.addCase(Act.loginUser.rejected, (state, action) => {
      state.user = initialState.user;
      state.loading = false;
    });

    // builder.addCase(Act.updateAdmin.pending, (state, action) => {
    //   state.loading = true;
    // });
    // builder.addCase(Act.updateAdmin.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload.data;
    //   localStorage.setItem("authUser", JSON.stringify(action.payload)) 
    // });
    // builder.addCase(Act.updateAdmin.rejected, (state, action) => {
    //   state.loading = false;
    // });

    builder.addCase(Act.viewUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Act.viewUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;

    });
    builder.addCase(Act.viewUser.rejected, (state, action) => {
      state.loading = false;
      state.user = null;

    });

    builder.addCase(Act.resetPass.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Act.resetPass.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(Act.resetPass.rejected, (state, action) => {
      state.loading = false;
    });
    // change password
    builder.addCase(Act.ChangePassword.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(Act.ChangePassword.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(Act.ChangePassword.rejected, (state, action) => {
      state.loading = false;
    });
    
    builder.addCase(Act.uploadFile.pending, (state, action) => {
      state.loading = true;
      state.uploadFilerLoader = true;
    });
    builder.addCase(Act.uploadFile.fulfilled, (state, action) => {
      state.loading = false;
      state.uploadFilerLoader = false;
    });
    builder.addCase(Act.uploadFile.rejected, (state, action) => {
      state.loading = false;
      state.uploadFilerLoader = false;
    });
  },
});

export default slice;
