import { createContext } from "react";

export const UserContext = createContext({
  users: [],
  setUsers: () => {},
  usersConfig: {
    pageNo: 1,
    order: "asc",
  },
  setUserConfig: () => {},
});
