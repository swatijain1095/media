import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../User";
import { AddUser } from "../AddUser";
import { Pagination } from "../Pagination";
import {
  setUsers,
  usersSelector,
  usersConfigSelector,
  filteredUsersSelector,
  setFilteredUsers,
} from "../../store/usersSlice";
import { getFilteredUsers } from "../../utilities/getFilteredUsers";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const filteredUsers = useSelector(filteredUsersSelector);
  const { pageNo, order, highlightId, searchTerm } =
    useSelector(usersConfigSelector);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(`http://localhost:3001/users`);
    const data = await response.json();
    dispatch(setUsers(data));
  }, [dispatch]);

  async function deleteData(id) {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, highlightId]);

  useEffect(() => {
    dispatch(
      setFilteredUsers(
        getFilteredUsers({
          users,
          pageNo,
          order,
          searchTerm,
        })
      )
    );
  }, [users, pageNo, order, searchTerm, dispatch]);

  return (
    <div>
      <AddUser fetchUsers={fetchUsers} />
      {filteredUsers.map((user) => (
        <User key={user.id} user={user} onDelete={deleteData} />
      ))}
      <Pagination />
    </div>
  );
}

export default UserList;
