import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  displayUsers: [],
  usersConfig: {
    pageNo: 1,
    order: "asc",
    highlightId: null,
    searchTerm: "",
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
    setDisplayUsers: (state, action) => {
      state.displayUsers = action.payload;
    },
  },
});

export const { setUsers, setUsersConfig, setDisplayUsers } = usersSlice.actions;
export const usersSelector = (state) => state.users.users;
export const useDisplayUsersSelector = (state) => state.users.displayUsers;
export const usersConfigSelector = (state) => state.users.usersConfig;
export default usersSlice.reducer;
