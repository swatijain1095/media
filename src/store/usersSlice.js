import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  filteredUsers: [],
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
    setFilteredUsers: (state, action) => {
      state.filteredUsers = action.payload;
    },
  },
});

export const { setUsers, setUsersConfig, setFilteredUsers } =
  usersSlice.actions;
export const usersSelector = (state) => state.users.users;
export const filteredUsersSelector = (state) => state.users.filteredUsers;
export const usersConfigSelector = (state) => state.users.usersConfig;
export default usersSlice.reducer;
