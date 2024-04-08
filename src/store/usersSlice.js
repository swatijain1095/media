import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  usersConfig: {
    pageNo: 1,
    order: "asc",
    highlightId: null,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setUsersConfig: (state, action) => {
      state.usersConfig = {
        ...state.usersConfig,
        ...action.payload,
      };
    },
  },
});

export const { setUsers, setUsersConfig } = usersSlice.actions;
export const usersSelector = (state) => state.users.users;
export const usersConfigSelector = (state) => state.users.usersConfig;
export default usersSlice.reducer;
