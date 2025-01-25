import { createSlice, current } from "@reduxjs/toolkit";
import * as Act from "./actions";

const initialState = {
  loading: false,
  users: [],
  totalCount: 0,
};

const slice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(Act.getUsers.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getUsers.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      users: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getUsers.rejected, (state, action) => ({
      ...state,
      loading: false,
      users: [],
      totalCount: 0,
    }));

    builder.addCase(Act.getUserDetails.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getUserDetails.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      users: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getUserDetails.rejected, (state, action) => ({
      ...state,
      loading: false,
      users: [],
      totalCount: 0,
    }));

    builder.addCase(Act.getUserPrivateCharacter.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(
      Act.getUserPrivateCharacter.fulfilled,
      (state, { payload }) => ({
        ...state,
        loading: false,
        users: payload.data,
        totalCount: payload.totalcount,
      })
    );
    builder.addCase(Act.getUserPrivateCharacter.rejected, (state, action) => ({
      ...state,
      loading: false,
      users: [],
      totalCount: 0,
    }));

    // users subscriptions

    builder.addCase(Act.getUsersSubscription.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(
      Act.getUsersSubscription.fulfilled,
      (state, { payload }) => ({
        ...state,
        loading: false,
        users: payload.data,
        totalCount: payload.totalcount,
      })
    );
    builder.addCase(Act.getUsersSubscription.rejected, (state, action) => ({
      ...state,
      loading: false,
      users: [],
      totalCount: 0,
    }));
    //user token
    builder.addCase(Act.getUsersToken.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.getUsersToken.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      users: payload.data,
      totalCount: payload.totalcount,
    }));
    builder.addCase(Act.getUsersToken.rejected, (state, action) => ({
      ...state,
      loading: false,
      users: [],
      totalCount: 0,
    }));
    ///change users status
    builder.addCase(Act.updateUser.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.updateUser.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
    }));
    builder.addCase(Act.updateUser.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));

    //add user
    builder.addCase(Act.AddUser.pending, (start, action) => ({
      ...start,
      loading: true,
    }));
    builder.addCase(
      Act.AddUser.fulfilled,
      (state, { payload }) => (
        console.log(payload),
        {
          ...state,
          loading: false,
        }
      )
    );
    builder.addCase(Act.AddUser.rejected, (state, action) => ({
      ...state,
      loading: false,
    }));
    // Case for viewing user
    builder.addCase(Act.USER_PROFILE.pending, (state, action) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(Act.USER_PROFILE.fulfilled, (state, { payload }) => ({
      ...state,
      loading: false,
      user: payload,
    }));
    builder.addCase(Act.USER_PROFILE.rejected, (state, action) => ({
      ...state,
      loading: false,
      user: null,
    }));
    // view user relative
    // builder.addCase(Act.USER_RELATIVE.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.USER_RELATIVE.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   // user: payload,
    // }));
    // builder.addCase(Act.USER_RELATIVE.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   user: null,
    // }));
    // user relative profile
    // builder.addCase(Act.USER_RELATIVE_PROFILE.pending, (state, action) => ({
    //   ...state,
    //   loading: true,
    // }));
    // builder.addCase(Act.USER_RELATIVE_PROFILE.fulfilled, (state, { payload }) => ({
    //   ...state,
    //   loading: false,
    //   user: payload,
    // }));
    // builder.addCase(Act.USER_RELATIVE_PROFILE.rejected, (state, action) => ({
    //   ...state,
    //   loading: false,
    //   user: null,
    // }));
  },
});

export default slice;
