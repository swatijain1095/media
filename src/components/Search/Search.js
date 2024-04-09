import { Input } from "../Input";
import {
  setUsersConfig,
  usersConfigSelector,
  usersSelector,
  setDisplayUsers,
} from "../../store/usersSlice";
import { useSelector, useDispatch } from "react-redux";

export const Search = () => {
  const { searchTerm } = useSelector(usersConfigSelector);
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setUsersConfig({ searchTerm: event.target.value }));
    // const searchUser = users.filter((user) => {
    //   return user.name.toLowerCase().includes(event.target.value);
    // });
    const searchUser = [];
    users.forEach((user) => {
      if (user.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        searchUser.push(user);
      }
    });
    dispatch(setDisplayUsers(searchUser));
  };

  return (
    <div>
      <Input
        id={"search"}
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search User..."
      ></Input>
    </div>
  );
};
