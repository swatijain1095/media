import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { User } from "../User";
import { AddUser } from "../AddUser";
import { Pagination } from "../Pagination";

import {
  setUsers,
  usersSelector,
  usersConfigSelector,
} from "../../store/usersSlice";

function UserList() {
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const { pageNo, order, highlightId } = useSelector(usersConfigSelector);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(
      `http://localhost:3001/users?_page=${pageNo}&_sort=name&_order=${order}`
    );
    const users = await response.json();
    dispatch(setUsers(users));
  }, [dispatch, pageNo, order]);

  async function deleteData(id) {
    await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    fetchUsers();
  }

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers, pageNo, order, highlightId]);

  return (
    <div>
      <AddUser fetchUsers={fetchUsers} />
      {users.map((user) => (
        <User key={user.id} user={user} onDelete={deleteData} />
      ))}
      <Pagination />
    </div>
  );
}

export default UserList;
