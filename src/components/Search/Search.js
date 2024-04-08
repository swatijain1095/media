import { Input } from "../Input";
import { setUsersConfig, usersConfigSelector } from "../../store/usersSlice";
import { useSelector, useDispatch } from "react-redux";

export const Search = () => {
  const { searchTerm } = useSelector(usersConfigSelector);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(setUsersConfig({ searchTerm: event.target.value }));
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
